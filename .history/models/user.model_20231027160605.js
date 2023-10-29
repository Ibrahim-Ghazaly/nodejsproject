const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    
  }
  price:Number

});

module.exports = mongoose.model('User', userSchema);
