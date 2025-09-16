const mongoose = require('mongoose');
const urlDb = require('../connection/urldb');
const urlSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  createdAt:{ 
    type: Date,
    default: Date.now
   }
});


module.exports=urlDb.model('url',urlSchema);