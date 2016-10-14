// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');
const Song = require('./song')

const bandSchema = {
  name: String,
  genre: String,
  corruptedByTheSystem: Boolean,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
}

const Band = mongoose.model('Band', bandSchema);
module.exports = Band;
