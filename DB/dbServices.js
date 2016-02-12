/**
 * Created by tomeraronovsky on 2/9/16.
 */

//all functions to insert, delete, find, replace, to database are here
var models = require('../DB/models')
var mongoose = require('mongoose');


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
            console.log("save gym");
        }
    })
}

function createProduct(name, price, comment){
    var product = new models.productsTable({
        name: name,
        price: price,
        comment: comment
    });
    product.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log("save product");
        }
    })

}

function createLesson(name, comment, time, numberOfPeople){
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
            console.log("create lesson");
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
            console.log("create admin");
        }
    })
}



// ----------- Admin ----------- //
function login(email, password) {
    models.adminsTable.findOne({ email: email, password: password }, function (err, admin){
        if(!admin)
            console.log("not admin");
        else
            console.log("admin");
    })
}



// ------- Delete functions -------//
function deleteGym(name, address){

}

function deleteProduct() {

}

function deleteLesson() {

}




// ------ Edit functions -------//
function editGym() {

}

function editProduct() {

}

function editLesson() {

}








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