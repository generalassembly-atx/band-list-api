const mongoose = require('mongoose');

const songSchema = {
  band :{type:mongoose.Schema.Types.ObjectId, ref : "Band"},
  title: String;
}

const Song = mongoose.model('Song', songSchema)
module.exports = Song;
