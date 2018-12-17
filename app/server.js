var express = require("express"); //using the express package
var mysql = require("mysql"); //using the mysql package
var html = require("html");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

//Establishing connection to the database
var connection = mysql.createConnection({
    host: "localhost",

    port: 8080,

    user: "root",

    password: "root",
    database: "TBD"
});

//For Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//enables both local and heroku connection
var PORT = process.env.PORT || 8080;

connection.connect(function (err) { //this portion simply establishes the connection to MAMP
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("success")
});


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("success");
  });
  