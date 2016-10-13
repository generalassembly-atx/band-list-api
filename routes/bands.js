var express = require('express');
var router = express.Router();

const Band = require('../models/band');

router.use('/:bandid', function(req, res, next){
  Band.findOne({"_id" : req.params.bandid}, function(err, band){
    if (err){
      res.status(500).send();
    } else if (!band){
      res.status(404).send();
    } else {
      res.band = band;
      next();
    }
  })
})
// get all bands method
router.get('/', function(req, res, next){
  Band.find({}, function(err, bands){
    if (err){
      res.status(500).send();
    } else {
      res.json(bands);
    }
  })
})
//create new band method
router.post('/', function(req, res, next){
  var newBand = new Band(req.body);
  newBand.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.json(newBand);
    }
  })
})
//get band by ID method
router.get('/:bandid', function(req, res, next){
  res.json(res.band);
})
//update band by ID method
router.put('/:bandid', function(req, res, next){
  var bandUpdate = Object.assign(res.band, req.body);
  bandUpdate.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.json(bandUpdate);
    }
  })
})
//delete band by ID method
router.delete('/:bandid', function(req, res, next){
  res.band.remove(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})

module.exports = router;
