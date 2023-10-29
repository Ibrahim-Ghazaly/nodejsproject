const mongoose = require('mongoose');

const { Schema } = mongoose;

const coursesSchema = new Schema({
  title: {type:String,re}, // String is shorthand for {type: String}
  price: String,

});