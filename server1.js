const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

app.use(express.static("./chat"));
app.use(bodyParser.urlencoded({extended: false}));

const dbUrl = "mongodb+srv://Vita:K4a0Zkeyg8y6yTDN@cluster0.fqazhbr.mongodb.net/?retryWrites=true&w=majority"

let Message = mongoose.model("Message", {
    name: String,
    message: String
})

app.get("/meddelanden", (req, res) => {

    Message.find({}, (err, messages) => {
        res.send(messages);
    });
});

app.post("/meddelanden", (req, res) => {
    let message = new Message(req.body);

    message.save((err) => {
        if(err){
            sendStatus(500);
        }

        io.emit("message", req.body);
        res.sendStatus(200);
    });
});

io.on("connection", (socket) => {
    console.log("En användare anslöt!");
})

mongoose.connect(dbUrl, (err) => {
    console.log("mongo db connection", err);
})

http.listen(3000, () => {
    console.log("Servern körs, besök http://localhost:3000");
})