var express = require('express');
var router = express.Router();
var _ = require('lodash');
var songs = require('./songs')

var Band = require('../models/band');

//MIDDLEWARE
router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem', 'songs'])
  next();
})
router.use('/:bandId', function (req, res, next) {
  Band.findById(req.params.bandId, function (err, band) {
    if (err) {
      res.status(500).send();
    } else if (!band) {
      res.status(404).send();
    } else {
      res.band = band;
      next();
    }
  })
})

//GET/students
router.get('/', function (req, res) {
  Band.find({}, function(err, band) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(band);
    }
  })
})

//POST/students
router.post('/', function(req, res){
  var band = new Band(req.body)
  band.save(function (err) {
    if (err) {
      res.status(500);
    } else {
      res.json(band);
    }
  })
})

//GET/students/id
router.get('/:bandId', function (req, res) {
  res.json(res.band);
})

//PUT
router.put('/:bandId', function (req, res) {
  var putBand = Object.assign(res.band, req.body)
  putBand.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(putBand)
    }
  })
})

//DELETE
router.delete('/:bandId', function (req, res) {
  res.band.remove(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})

router.use('/:bandId/songs', songs)


module.exports = router;
