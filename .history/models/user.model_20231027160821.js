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
    re
  }

});

module.exports = mongoose.model('User', userSchema);
