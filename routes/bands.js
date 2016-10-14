var express = require('express');
var router = express.Router();
const _ = require('lodash');
const Band = require('../models/band');
var songs = require('./songs');

router.use('/:id', function (req, res, next) {
  Band.findById(req.params.id, function (err, band) {
    if (err) {
      res.status(500).send();
    } else if (!band) {
      res.status(404).send();
    } else {
      res.band = band;
      next();
    }
  });
});

//LINK SONGS
router.use('/:id/songs', songs);

//WHAT HAPPENS WHEN USER DOES POST REQUEST ON ROUTE /bands
router.post('/', function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem']);
  var newBand = new Band(req.body);
  newBand.populate('songs', 'title');
  newBand.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(newBand);
    }
  });
});

//WHAT HAPPENS WHEN USER DOES GET REQUEST ON ROUTE /bands
router.get('/', function (req, res, next) {
  Band.find({}, function (err, bands) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(bands);
    }
  });
});

//WHAT HAPPENS WHEN USER DOES GET REQUEST ON SPECIFIC BAND
router.get('/:id', function (req, res, next) {
  res.json(res.band);
});

//WHAT HAPPENS WHEN USER DOES PUT REQUEST
router.put('/:id', function (req, res, next) {
  var updatedBand = Object.assign(res.band, req.body);
  updatedBand.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedBand);
    }
  });
});

//WHAT HAPPENS WHEN USER DOES DELETE REQUEST
router.delete('/:id', function (req, res, next) {
  res.band.remove(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
