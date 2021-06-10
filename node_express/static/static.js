var express = require("express");
var app = express();
app.use(express.static("public"));
app.use("/virtual", express.static("virtual"));

app.listen(8080, () => console.log("listening on http://localhost:8080"));
