// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');
const bandSchema = {
  name: String,
  geners: String,
  curruptedByTheSystem: Boolean
  }


const band = mongoose.model('Band', bandSche);

module.exports = Band;
