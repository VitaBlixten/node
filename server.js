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

  app.get("/login", (req, res) => {
    res.redirect('/indexl.html');
  })

  app.post("/login", (req, res) => {
    var upp = [req.body["epost2"], req.body["password2"]]
    
    console.log(req.body);
    var sql1 = "SELECT * FROM slutprojekt.konto;";

    connection.query(sql1, function(err, result, field) {
      var numRows = result.length;
      console.log(numRows);
      for (var i = 0; i < numRows; i++) {
        if (result[i]["epost"] === req.body["epost"]) {
        
          if (result[i]["password"] === req.body["password"]) {
            console.log("hej");
            io.emit("login", req.body)
        }
      }
    }

      if (err) throw err;
  });

})
  
  http.listen(34739, () => {
      console.log("Servern körs, besök http://localhost:34739");
  })