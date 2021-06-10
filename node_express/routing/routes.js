var express = require("express");
var router = express.Router();

router.get("/one", function(req, res) {
  res.send("GET 1");
});
router.get("/two", function(req, res) {
  res.send("POST 2");
});

//export this router to use in our index.js
module.exports = router;
