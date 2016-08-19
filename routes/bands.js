var express = require('express');
var router = express.Router();
var Band = require('../models/band')
const _ = require('lodash');

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
  next()
})

//GET
router.get('/', function(req, res, next) {
  Band.find({}, function(err, band) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(band)
    }
  })
});

//POST
router.post('/', function(req, res, next) {
  const band = new Band(req.body)
  band.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(band)
    }
  })
})

//GET BY ID
router.get('/:bandId', function (req, res, next) {
  Band.findById(req.params.bandId, function (err, band) {
    if (err) {
      res.status(500).send()
    } else {
      if (band) {
        res.json(band)
      } else {
        res.status(404).send()
      }
    }
  })
})












module.exports = router;
