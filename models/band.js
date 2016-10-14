// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');
//const Band = require('song');
const bandSchema = {
  bandName: String,
  genre: String,
  rating: Number,
  isCool: Boolean,
  songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}]
}

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
