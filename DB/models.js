/**
 * Created by tomeraronovsky on 2/6/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
    name: String,
    comment: String,
    time: Date,
    numberOfPeople: Number
});

var productSchema = new Schema({
    name: String,
    price: Number,
    comment: String
});

var gymSchema = new Schema({
    name: String,
    address: String,
    price: Number,
    website: String,
    //lists
    lessons: [lessonSchema],
    products: [productSchema]
});

module.exports.gyms = mongoose.model('gym',gymSchema,'gyms');
module.exports.lessons = mongoose.model('lesson',lessonSchema,'lessons');
module.exports.products = mongoose.model('product',productSchema,'products');

/*
var Product = mongoose.model('products');
exports.index = function(req,res) {
    Product.create({
        name: "yoga",
        comment: "good"
    });
}*/