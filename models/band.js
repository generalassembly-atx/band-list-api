// : Add and export band model
// attrs: name, genre, corruptedByTheSystem

const mongoose = require('mongoose');

const bandSchema = {
  bandName: String,
  genre: String,
  numAlbums: Number,
  isSellOut: Boolean
}

const Band = mongoose.model('Band', bandSchema);
module.exports = Band;
