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











module.exports = router;
