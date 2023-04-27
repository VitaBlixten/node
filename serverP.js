const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(express.static("./LanCrew"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const dbUrl = "mongodb+srv://Vita:K4a0Zkeyg8y6yTDN@cluster0.fqazhbr.mongodb.net/?retryWrites=true&w=majority"

let Medlem = mongoose.model("Medlem", {
    status: String,
    förnamn: String,
    efternamn: String,
    discord: String,
    epost: String
})

app.get("/medlem", (req, res) => {

    Medlem.find({}, (err, medlemmar) => {
        res.send(medlemmar);
    });
    res.cookie("Besök", "1");
    res.send('user data added to cookie');
});

app.post("/medlem", (req, res) => {
    let medlemmar = new Medlem(req.body);

    medlemmar.save((err) => {
        if(err){
            sendStatus(500);
        }

        io.emit("medlemmar", req.body);
        res.sendStatus(200);
    });
});

io.on("connection", (socket) => {
    console.log("En användare anslöt!");
})

mongoose.connect(dbUrl, (err) => {
    console.log("mongo db connection", err);
})

http.listen(34739, () => {
    console.log("Servern körs, besök http://localhost:34739");
})