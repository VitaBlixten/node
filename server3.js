let mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MYSpingu03!",
    database: "hej",
});

connection.connect(function (err) {
    if (err) throw err;
    let sql = "insert into tjena (namn) values ('God morgon')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Eleven har blivit tillagd!");
    });
    connection.query("select * from tjena", function (err, result, field) {
        if (err) throw err;
        console.log(result);
    });
});