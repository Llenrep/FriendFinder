var express = require("express"); //using the express package
var path = require("path"); //using the path package
var app = express();
var fs = require('fs');

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/api/friends", function(req, res){
        
        res.sendFile(path.join(__dirname, "../data/friends.js"))
    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

