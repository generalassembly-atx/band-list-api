// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const express = require('express');
const mongoose = require('mongoose');
const Song = require('./song');
var Schema = mongoose.Schema;

var bandSchema = Schema({
  name: String,
  genre: String,
  corruptedByTheSystem: Boolean,
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
