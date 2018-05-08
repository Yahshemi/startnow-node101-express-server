// import files and packages up here
// var http = require('http');
// (`data.js`)
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var data = require("./data.json");
// create your express server below
var app = express();

app.use(morgan("tiny"));

app.get('/', function (req, res) {
    res.send("OK");
});

app.get('/data', function (req, res) {
    res.send(data);
});

// add your routes and middleware below

// finally export the express application
module.exports = app;

