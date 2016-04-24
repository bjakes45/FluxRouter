var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  upc: Number,
  manu: String,
  size: Number,
  reports: { type: Number, default: 0 },
  approved: { type: Number, default: 0 },
  favs: { type: Number, default: 0 }
});

module.exports = mongoose.model('Item', itemSchema);