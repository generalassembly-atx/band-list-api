// : Add and export band model
// attrs: name, genre, corruptedByTheSystem

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const bandSchema = Schema({
  bandName: String,
  genre: String,
  numAlbums: Number,
  isSellOut: Boolean
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

const songSchema = Schema({
  _bandName: {type: String, ref: 'Band'},
  title: String,
})

const Band = mongoose.model('Band', bandSchema);
const Song = mongoose.model('Song', songSchema);
module.exports = Band;
