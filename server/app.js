
let express = require("express");
let morgan = require("morgan");
let path = require("path");
let data = require("./data.json");

var app = express();

app.use(morgan("tiny"));

app.get('/', function (req, res) {
    res.send("OK");
});

app.get('/data', function (req, res) {
    res.send(data);
});

module.exports = app;

