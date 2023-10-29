const mongoose = require('mongoose');

const { Schema } = mongoose;

const coursesSchema = new Schema({
  title: {type:String,requi}, // String is shorthand for {type: String}
  price: String,

});