var express = require('express');
var router = express.Router();

var Band = require('../models/band.js');

router.get('/', function(req,res,next){
  Band.find({}, function(err, bands){
    if (err) {
      res.status(500).send();
    } else {
      res.json(bands);
      // res.render('bands')
    }
  });

})

module.exports = router;
