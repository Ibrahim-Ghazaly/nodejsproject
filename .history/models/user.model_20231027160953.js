const mongoose = require('mongoose');
import validator = require'validator';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  lastNAme:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validator:{siEmail:true}
  }

});

module.exports = mongoose.model('User', userSchema);
