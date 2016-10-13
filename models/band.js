// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem


var bandSchema = {
  name: String,
  genre: String,
  corruptedByTheSystem: Boolean
}

var Band = mongoose.model('Band', bandSchema);

module.exports = Band;
