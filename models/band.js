// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
var mongoose = require('mongoose');


var bandSchema = {
  name: String,
  genre: String,
  corruptedByTheSystem: Boolean
}

var Band = mongoose.model('Band', bandSchema);

module.exports = Band;
