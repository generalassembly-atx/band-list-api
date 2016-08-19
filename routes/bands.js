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
  Band.find({}, function(err, bands) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(bands)
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














module.exports = router;
