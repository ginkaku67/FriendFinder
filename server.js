var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//var friendsData = [];
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });