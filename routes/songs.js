var express = require('express');
var router = express.Router();
const Song = require('../models/song');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(res.band.songs);
});
//create new song method
router.post('/', function(req, res, next){
  //var newSong = new Song(req.body);
  var newSong = new Song({
    _creator : res.band._id,
    songName: "Northern Lights",
    isHit: false
  })
  console.log(newSong);
  // newSong.save(function(err){
  //   if (err){
  //     res.status(500).send();
  //   } else {
  //     res.json(newSong);
  //   }
  // })
})
module.exports = router;
