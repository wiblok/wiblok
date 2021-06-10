var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res) {
  const message = "Hello World";
  res.render("./hello", { message: message });
});

app.listen(8080, () => console.log("listening on http://localhost:8080"));
