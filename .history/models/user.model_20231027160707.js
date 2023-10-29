const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:Str,
    required:true
  },
  price:{
    type:""
  }

});

module.exports = mongoose.model('User', userSchema);
