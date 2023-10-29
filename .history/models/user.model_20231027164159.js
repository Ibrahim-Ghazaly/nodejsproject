const mongoose = require('mongoose');
const validator = require('validator');

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
    validate:[validator.isEmail,'field must a valid email address']
  },
  password:{
    type:String,
    
  }

});

module.exports = mongoose.model('User', userSchema);
