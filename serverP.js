const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("./LanCrew"));
app.use(bodyParser.urlencoded({extended: false}));

let medlem = [
    {status: "Ordförande", förnamn: "Erik", efternamn: "Moreno", discord: "Em#1245", epost: "erik.moreno@elev.ntig.se"},
    {status: "Vice ordförande",förnamn: "Erik", efternamn: "Engdahl", discord: "Ed#1245", epost: "erik.engdahl@elev.ntig.se"},
    {status: "Ekonomi ansvarig",förnamn: "Marcus", efternamn: "Merio", discord: "Ed#1245", epost: "markus.merio@elev.ga.ntig.se"},
    {status: "IT-ansvarig",förnamn: "Erik", efternamn: "Cunningham", discord: "Ed#1245", epost: "erik.cunningham@elev.ntig.se"},
    {status: "Tunerings ansvarig",förnamn: "Hannes", efternamn: "Kindahl", discord: "Ed#1245", epost: "hannes.kindahl@elev.ntig.se"}
]

let tot = [{gamer: 1},{gamer: 2},{gamer: 3},{gamer: 4}]

app.get("/medlem", (req, res) => {
    res.send(medlem);
})

app.post("/medlem", (req, res) => {
    medlem.push(req.body);
    io.emit("medlem", req.body);
    res.sendStatus(200);
})  

io.on("connection", (socket) => {
    console.log("En användare anslöt!");
})

http.listen(34739, () => {
    console.log("Servern körs, besök http://localhost:34739");
})