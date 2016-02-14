/**
 * Created by tomeraronovsky on 2/9/16.
 */

//all functions to insert, delete, find, replace, to database are here
var models = require('../DB/models')
var mongoose = require('mongoose');


initDB();
function initDB(){
    var initAdmins = require('./initializationDB/initAdmin');
    var initProducts = require('./initializationDB/initProducts');
    var initLessons = require('./initializationDB/initLessons');
    var initGyms = require('./initializationDB/initGyms');

    var adminsTable = models.adminsTable;
    var productsTable = models.productsTable;
    var lessonsTable = models.lessonsTable;
    var gymsTable = models.gymsTable;

    models.adminsTable.count(function(err,count){
      if(!err && count==0){
          console.log("admins table is empty - insert init data from json");
          adminsTable.collection.insert(initAdmins);
      }
        else {
          console.log("admin table already with data");
      }
    });

    models.productsTable.count(function(err,count){
        if(!err && count==0){
            console.log("products table is empty - insert init data from json");
            productsTable.collection.insert(initProducts);
        }
        else {
            console.log("products table already with data");
        }
    });

    models.lessonsTable.count(function(err,count){
        if(!err && count==0){
            console.log("lessons table is empty - insert init data from json");
            lessonsTable.collection.insert(initLessons);
        }
        else {
            console.log("lessons table already with data");
        }
    });

    models.gymsTable.count(function(err,count){
        if(!err && count==0){
            console.log("gyms table is empty - insert init data from json");
            gymsTable.collection.insert(initGyms);
        }
        else {
            console.log("gyms table already with data");
        }
    });
}




// ----------- Create Functions ----------- //
function createNewGym(name, city, street, houseNumber, price, website){
    var gym = new models.gymsTable({
                name: name,
                city: city,
                street: street,
                houseNumber: houseNumber,
                price: price,
                website: website
    });
    gym.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log("insert new gym to db");
        }
    })
}

function createProduct(name, comment){
    var product = new models.productsTable({
        name: name,
        comment: comment
    });
    product.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log("insert new product to db");
        }
    })
}

function createLesson(name, comment){
    var lesson = new models.lessonsTable({
        name: name,
        comment: comment,
        time: time,
        numberOfPeople: numberOfPeople
    });
    lesson.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log("insert new lesson to db");
        }
    })
}


function createAdmin(email, password){
    var admin = new models.adminsTable({
        email: email,
        password: password
    });
    admin.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log("insert new admin to db");
        }
    })
}



// ----------- Admin ----------- //
models.adminsTable.loginAdmin =  function(email, password) {

    var query  = models.adminsTable.findOne({ email: email, password: password},function (err) {
        if (err)
            console.log(err);
    });

    return query.exec(function (err, admin) {
        return admin;
    });



    /*models.adminsTable.findOne({ email: email, password: password }, function (err, admin){
     if(!admin){
     return false;
     }
     else{
     return true;
     }
     })*/
}



/*
models.adminsTable.removeAdmin = function(name) {

    //first check if the admin is root admin (the big boss..)

    //then if not, delete the admin from admins table
    models.adminsTable.remove({name: name}, function (err) {
        if (!err) {
            console.log("lesson remove successful or if doesn't exist doesn't remove anything");
            return true;
        }
        else {
            console.log(err);
            return false;
        }
    });
}*/






// ------- Delete functions -------//
function deleteGym(name){
    models.gymsTable.remove({name: name}, function (err) {
        if (!err) {
            console.log("gym remove successful or if doesn't exist doesn't remove anything");
        }
        else console.log(err);
    });
}


function deleteProduct(name) {

    //first delete the product from all the gyms...

    //then delete the product from products table
    models.productsTable.remove({name: name}, function (err) {
        if (!err) {
            console.log("product remove successful or if doesn't exist doesn't remove anything");
        }
        else console.log(err);
    });
}


function deleteLesson(name) {

    //first delete the lesson from all the gyms...

    //then delete the lesson from lessons table
    models.lessonsTable.remove({name: name}, function (err) {
        if (!err) {
            console.log("lesson remove successful or if doesn't exist doesn't remove anything");
        }
        else console.log(err);
    });
}







// ------ Edit functions -------//
function editGym() {

}

function editProduct() {

}

function editLesson() {

}

// -------------  SEARCH FUNCTIONS ------------- //

models.gymsTable.findGym =function(name,city,price){
    var query  = models.gymsTable.find({ name: name, city:city, price:price },function (err) {
        if (err)
            console.log(err);
    });

    return query.exec(function (err, gyms) {
        return JSON.stringify(gyms);
    });
}


models.gymsTable.findAllGymsInCity =function(city){
    var query  = models.gymsTable.find({city:city },function (err) {
        if (err)
            console.log(err);
    });

    return query.exec(function (err, gymsInCity) {
        return gymsInCity;
    });
}

models.gymsTable.findAllGymsInPrice =function(price){
    var query  = models.gymsTable.find({price:price },function (err) {
        if (err)
            console.log(err);
    });

    return query.exec(function (err, gymsInPrice) {
        return gymsInPrice;
    });
}


models.gymsTable.findAllGyms = function() {

    var query  = models.gymsTable.find({},function (err) {
        if (err)
            console.log(err);
    });

    return query.exec(function (err, gyms) {
        return JSON.stringify(gyms);
    });
}








//var gym = createNewGym('holmes place raanana','Hayezira st 10',60,'http://www.holmes-place.co.il');
/*models.lessonsTable.findOne({ name: 'Yoga', time: 'Monday, 8pm to 10.30pm' }, function (err, lesson) {
 if (!lesson)
 console.log("not find lesson");
 else {
 console.log("find lesson");
 }


 models.gymsTable.findOne({name: 'Holmes Place Raanana'}, function (err, gym) {
 if (!gym)
 console.log("not find gym");
 else {
 console.log("find gym");
 gym.gymLessons.push(lesson._id);
 gym.save(function (err) {
 if (err)
 console.log("error to update lesson");
 })
 }
 })
 });

 */


//login('tomer_aronovsky@hotmail.com', '12345');
//addProducts();
////addProducts();
//addProducts();
//function addProducts(){
//    new models.productsTable({
//        name: 'sadsadsadsadas',
//        price: 78678767,
//        comment: 'sadasdsadsadasdsa'
//    }).save()
//};