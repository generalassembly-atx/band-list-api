var express = require('express');
var router = express.Router();
const _ = require('lodash');

var Band = require('../models/band');

//LODASH MIDDLEWARE

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ["bandName", "numAlbums", "genre", "isSellOut"]);
  next();
})

router.use('/:bandName', function (req, res, next) {
  Band.findById(req.params.bandName, function(err, band) {
    if (err) {
      res.status(500).send();
    } else if (!band){
      res.status(404).send();
    } else {
      res.band = band;
      next();
    }
  })
})

//GET /bands collection
router.get('/', function (req, res) {
  Band.find({}, function (err, bands) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(bands);
    }
  })
})

//GET /bands/:bandName

router.get('/:bandName', function (req, res) {
  res.json(res.band);
})

//POST /bands
router.post('/', function (req, res) {
  var band = new Band(req.body);
  band.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(band);
    }
  })
})

//PUT /:bandName

router.put('/:bandName', function (req, res) {
  var updatedBand = Object.assign(res.band, req.body);
  updatedBand.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedBand);
    }
  })
})

//DELETE /bands/:bandName

module.exports = router;
