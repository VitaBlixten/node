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
    var namn = []
    
    namn.push(req.body["förnamn"])
    namn.push(req.body["efternamn"])
    namn.push(req.body["klass"])
    namn.push(req.body["discord"])
    namn.push(req.body["epost"])
    namn.push(req.body["password"])
    
    console.log(namn);
    
    var sql = "INSERT INTO konto (förnamn, efternamn, klass, discord, epost, password) VALUES ?";
    var values = [namn];

    connection.query(sql, [values], function(err) {
        if (err) throw err;
    });
});

  app.post("/login", (req, res) => {
    var upp = []
    upp.push(req.body["epost"])

    var sql1 = "SELECT (e-post, password) FROM slutprojekt.konto;";

    connection.query(sql1, function(err, result) {
      if (result["epost2"] = req.body["epost2"]) {

      }

      if (result["password2"] = req.body["password2"]) {
        
      }

      if (err) throw err;
  });

})
  
  http.listen(34739, () => {
      console.log("Servern körs, besök http://localhost:34739");
  })