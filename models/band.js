// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem

const mongoose = require('mongoose')

var bandsSchema = {
  name: String,
  genre: String,
  corrputedByTheSystem: Boolean
}

const Bands = mongoose.model('Bands, bandsSchema')

module.exports = Bands;
