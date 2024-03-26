const mongoose = require('mongoose')
const { Schema } = mongoose;

const mailSchema = new Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
  },
    name:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    phone:{
      type: String,
      default: "General"
    },
    date:{
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('Mail',mailSchema);