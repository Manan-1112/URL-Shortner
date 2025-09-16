const mongoose = require('mongoose');
const userDb = require('../connection/userdb');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = userDb.model('user', userSchema);