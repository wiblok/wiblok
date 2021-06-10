var express = require("express");
var app = express();

app.get("/:id", function(req, res) {
  res.send("現在のパラメータIDは" + req.params.id + "です");
});
app.listen(3000);
