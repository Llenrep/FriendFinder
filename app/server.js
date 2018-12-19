var express = require("express"); //using the express package
var html = require("html");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

//For Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//enables both local and heroku connection
var PORT = process.env.PORT || 8080;

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  