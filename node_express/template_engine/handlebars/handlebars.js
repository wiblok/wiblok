var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  const message = "Hello World";
  res.render("./hello", { message: message });
});

app.listen(8080, () => console.log("listening on http://localhost:8080"));
