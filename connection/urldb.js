const mongoose = require('mongoose');

const urlDb = mongoose.createConnection('mongodb://localhost:27017/url-short');

urlDb.on('connected', () => {
  console.log('Connected to URL DB');
});

module.exports = urlDb;


