var express = require('express');
var router = express.Router();
var _ = require('lodash');
var songs = require('./songs')

var Band = require('../models/band')

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'curruptedByTheSystem'])
  next();
})

router.use('/:bandId', function (req, res, next) {
  Band.findById(req.params.bandId, function (err, band) {
    if (err) {
      res.status(500).send()
    } else if (!band){
      res.status(404).send()
    } else {
      res.band = band
      next();
    }
  })
})

router.use('/:bandId/songs', songs)

router.get('/', function (req, res, next) {
 Band.find({}, function(err, bands) {
   if (err) {
     res.status(404).send()
    } else {
      res.json(bands)
   }
  })
})

router.post('/', function(req, res, next) {
  var band = new Band(req.body);
  band.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(band)
    }
  })
})

router.get('/:bandId', function (req, res, next) {
 res.json(res.band)
})

router.put('/:bandId', function (req, res, next) {
  var updatedBand = Object.assign(res.band, req.body);
  updatedBand.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedBand)
    }
  })
})

router.delete('/:bandId', function (req, res, next) {
  res.band.remove(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})


module.exports = router;
