const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  last:{
    type:String
  }

});

module.exports = mongoose.model('User', userSchema);
