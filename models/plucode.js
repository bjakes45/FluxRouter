var mongoose = require('mongoose');

var pluSchema = new mongoose.Schema({
  _id: { type: String, unique: true, index: true },
  ID: Number,
  PLU: Number,
  CATEGORY: String,
  COMMODITY: String,
  VARIETY: String,
  ADDITIONAL_VARIETY_INFO: String,
  SIZE: String,
  NA_SIZE: String,
  ROW_SIZE: String,
  RESTRICTIONS: String,
  NOTES: String,
  AKA: String,
  TRADEMARK: String,
  BOTANCAL_NAME: String,
  REVISION_DATE: Date,
  DATE_ADDED: Date,
  GPC: Number
});

module.exports = mongoose.model('plucode', pluSchema);