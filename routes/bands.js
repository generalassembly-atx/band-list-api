var express = require('express');
var router = express.Router();

var Band = require('../models/band.js');

var _ = require('lodash');


// MIDDLE WARE
    // setting up a whitelist

router.use(function(req,res,next){
  req.body = _.pick(req.body, ['name','genre','corruptedByTheSystem']);
  next();
})

    // storing a singly requested record from DB
router.use('/:id', function(req,res,next){
  Band.findById(req.params.id, function(err, band){
    res.band = band;
    next();
  });

})


// // MIDDLE WARE

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

router.post('/', function(req,res,next){
  var newBand = new Band(req.body);
  newBand.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.json(newBand);
      // res.status(204).send();
    }
  })
})

router.get('/:id', function(req,res,next){
  res.json(res.band);
})

router.put('/:id', function(req,res,next){
  var alteredBand = Object.assign(res.band, req.body);
  alteredBand.save(function(err){
    if (err){
      res.status(500).send();
    } else{
      res.json(alteredBand);
    }
  })
})

router.delete('/:id', function(req,res,next){
  res.band.remove(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });

})

module.exports = router;
