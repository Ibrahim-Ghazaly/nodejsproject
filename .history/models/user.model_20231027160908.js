const mongoose = require('mongoose');

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
    validator:siEmail
  }

});

module.exports = mongoose.model('User', userSchema);
