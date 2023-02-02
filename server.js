const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("./chat"));
app.use(bodyParser.urlencoded({extended: false}));

let messages = [
    {name: "Mathias", message: "Hej!"},
    {name: "Henrik", message: "Hallå!"}
]

app.get("/meddelanden", (req, res) => {
    res.send(messages);
})

app.post("/meddelanden", (req, res) => {
    messages.push(req.body);
    io.emit("message", req.body);
    res.sendStatus(200);
})

io.on("connection", (socket) => {
    console.log("En användare anslöt!");
})

http.listen(3000, () => {
    console.log("Servern körs, besök http://localhost:3000");
})