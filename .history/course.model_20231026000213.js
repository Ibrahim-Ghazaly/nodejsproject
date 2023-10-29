const mongoose = require('mongoose');

const { Schema } = mongoose;

const coursesSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  price:Number

});

module.exports = mongoose.model('Course', coursesSchema);
