const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNo: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String
    // required: true
  },
  notifyMovie: [{
    type: Object
  }],
  bookedMovie:[{
    type:mongoose.Schema.Types.ObjectId, ref:'Movie'
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;