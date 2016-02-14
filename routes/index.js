var express = require('express');
var path = require('path');
var models = require('../DB/models');
var app = express();


/* GET home page. */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

/*
app.get('/SearchGym/:Gym/:city/:price', function(req, res) {
  var gym = req.params['Gym'];
  var city= req.params['city'];
  var price= req.params['price'];
  console.log("im in the search route");

  models.gymsTable.findGym(gym,city,price).then(function (data) {
    res.json(data);
  });
  /*console.log(gym);
  console.log(city);
  console.log(price);
  console.log("!!!!!!!!!!!!!!!!!!");
  var gymData;
models.gymsTable.findGym(gym,city,price,function(err,data){
   // gymData =
  });
  console.log("!!!!!!!!!!!!!!!!!!");
  console.log(gymData);
  console.log("!!!!!!!!!!!!!!!!!!");

});
 */

app.get('/SearchGym/:Gym/:city/:price', function(req, res) {
  var gym = req.params['Gym'];
  var city= req.params['city'];
  var price= req.params['price'];
  console.log("im in the search route");

  models.gymsTable.findGym(gym,city,price).then(function (data) {
    res.json(data);
  });
});

app.get('/login/:email/:password', function(req, res) {
  console.log("im in the route");
  var mail = req.params['email'];
  var password= req.params['password'];
  models.adminsTable.loginAdmin(mail,password).then(function (data) {
    res.json(data);
  });
});


app.get('/adminMenu/', function(req, res) {
  console.log("im in the admin menu route");
  models.gymsTable.findAllGyms().then(function (data) {
    res.json(data);
  });
});

app.get('/adminMenuProducts/', function(req, res){
  console.log("im in the admin menu route- products");
  models.productsTable.findAllProducts().then(function (data) {
    res.json(data);
  });
});

app.get('/adminMenuCourse/', function(req, res){
  console.log("im in the admin menu route- products");
  models.lessonsTable.findAllLessons().then(function (data) {
    res.json(data);
  });
});



module.exports = app;


