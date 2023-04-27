const express = require("express");

const app = express();

app.use(express.static("./slutprojekt"));


app.listen(34739, () => {
    console.log("Servern körs, besök http://localhost:34739");
})