const mongoose = require('mongoose');

const userDb = mongoose.createConnection('mongodb://localhost:27017/user-auth');

userDb.on('connected', () => {
  console.log('Connected to User DB');
});

module.exports = userDb;