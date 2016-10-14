const mongoose = require('mongoose');
//const Band = require('band');
const songSchema = {
  band: {type: mongoose.Schema.Types.ObjectId, ref: 'Band'},
  songName: String,
  isHit: Boolean
}
const Song = mongoose.model("Song", songSchema);
module.exports = Song;
