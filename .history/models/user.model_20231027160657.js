const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:"string",
    required:true
  },
  price:{
    type:""
  }

});

module.exports = mongoose.model('User', userSchema);
