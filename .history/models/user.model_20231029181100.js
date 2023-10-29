const mongoose = require('mongoose');
const validator = require('validator');
const userRoles= require('../utils/userRoles')

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate:[validator.isEmail,'field must be a valid email address']
  },
  password:{
    type:String,
    required:true
  },
  token:{
    type:String,
  },
  role:{
    type:String,
    enum:[userRoles.USER,userRoles.ADMIN,userRoles.MANAGER],
    default:userRoles.USER
  },
  avatar:{type:String}

});

module.exports = mongoose.model('User', userSchema);
