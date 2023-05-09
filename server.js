const express = require("express");
const bodyParser = require('body-parser');
let mysql = require("mysql2");

const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MYSpingu03!",
  database: "slutprojekt",
});

var konto = {}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./slutprojekt"));


  io.on("connection", (socket) => {
    console.log("En användare anslöt!");
  })

  app.get("/konton", (req, res) => {
    res.send(konto)
});

  app.post("/konton", (req, res) => {
    var allt = {}
    console.log(req.body);
});

  http.listen(34739, () => {
      console.log("Servern körs, besök http://localhost:34739");
  })