const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    ty
  }
  price:Number

});

module.exports = mongoose.model('User', userSchema);
