const mongoose = require('mongoose');

const { Schema } = mongoose;

const coursesSchema = new Schema({
  title: {type:String,required:true}, // String is shorthand for {type: String}
  price: ,

});