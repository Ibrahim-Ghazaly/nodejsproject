const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:""
  }
  price:Number

});

module.exports = mongoose.model('User', userSchema);
