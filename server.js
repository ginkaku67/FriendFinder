var express = require("express");
var path = require("path");
var app = express();
var bodyparser = require("body-parser")
var PORT = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });