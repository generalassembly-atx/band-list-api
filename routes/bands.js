var express = require('express');
var router = express.Router();
var Band = require('../models/band')
const _ = require('lodash');

router.use((req, res, next) => {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
  next()
})

router.get('/', (req, res, next) => {
  Band.find({}, (err, bands) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(bands)
    }
  })
});
router.post('/', (req, res, next) => {
  const band = new Band(req.body)
  band.save((err) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(band)
    }
  })
})
router.get('/:bandId', (req, res, next) => {
  Band.findById(req.params.bandId, (err, band) => {
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
