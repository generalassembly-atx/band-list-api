var express = require('express');
var router = express.Router();
const _ = require('lodash');

var songs = require('./songs');

var Band = require('../models/band');

//LODASH MIDDLEWARE

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ["bandName", "numAlbums", "genre", "isSellOut"]);
  next();
})

router.use('/:bandId', function (req, res, next) {
  Band.findById(req.params.bandId, function(err, band) {
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

router.use('/:bandId/songs', songs);

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

//GET /bands/:bandId

router.get('/:bandId', function (req, res) {
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

//PUT /:bandId

router.put('/:bandId', function (req, res) {
  var updatedBand = Object.assign(res.band, req.body);
  updatedBand.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedBand);
    }
  })
})

//DELETE /bands/:bandId
router.delete('/:bandId', function (req, res) {
  res.band.remove(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})


module.exports = router;
