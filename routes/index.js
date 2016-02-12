var express = require('express');
var path = require('path');
var app = express();

/* GET home page. */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});


app.get('/SearchGym/:Gym/:city/:price', function(req, res) {
  var gym = req.params['Gym'];
  var city= req.params['city'];
  var price= req.params['price'];
  console.log(gym);
  console.log(city);
  console.log(price);
});




module.exports = app;


