/**
 * Created by tomeraronovsky on 2/8/16.
 */

var mongoose = require('mongoose');

//connect to DB
var dbURI = 'mongodb://localhost/GymProject';
mongoose.connect(dbURI);
//print if connect sucessfuly
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});