// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');
const bandSchema = {
  name: String,
  geners: String,
  curruptedByTheSystem: Boolean
  }


const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
