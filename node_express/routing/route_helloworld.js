var express = require("express");
var app = express();

app.get("/route", function(req, res) {
  res.send("Hello route");
});

app.listen(3000);
