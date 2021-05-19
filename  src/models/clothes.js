'use strict';

const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String },
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;