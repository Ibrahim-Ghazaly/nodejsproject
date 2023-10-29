const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  price:{
    type:String
  }

});

module.exports = mongoose.model('User', userSchema);
