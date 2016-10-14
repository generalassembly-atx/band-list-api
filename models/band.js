// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');

var bandSchema = {
  name: String,
  genre: String,
  curruptedByTheSystem: Boolean,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song'}]
}



var Band = mongoose.model('Band', bandSchema);

module.exports = Band;
