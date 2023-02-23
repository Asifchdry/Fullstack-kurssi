// Otetaan express-moduuli käyttöön
var express = require("express");
var app = express();

// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use('/joku.html', express.static("./joku.html"))

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function(req, res) {
  res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti Expressin avulla
app.listen(8071, function() {
  console.log("Example app listening on port 8071!");
});
