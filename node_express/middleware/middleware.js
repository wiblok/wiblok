var express = require("express");
var app = express();

app.use(function(req, res, next) {
  console.log("hello middleware");
  next();
});

app.get("/middleware", function(req, res) {
  res.send("hello world");
});
app.listen(3000);
