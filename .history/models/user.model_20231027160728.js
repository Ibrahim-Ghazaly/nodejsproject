const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  lastNAme:{
    type:String
  }

});

module.exports = mongoose.model('User', userSchema);
