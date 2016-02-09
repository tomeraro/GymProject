var express = require('express');
var path = require('path');
var app = express();
//var MongoClient = require('mongodb').MongoClient;
//var router = express.Router();


/* GET home page. */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});








module.exports = app;
