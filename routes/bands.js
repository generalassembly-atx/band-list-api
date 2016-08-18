var express = require('express');
var router = express.Router();
var band = require('../models/band');
const _ = require('lodash');

router.use('/', (req, res, next) => {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
 next()
});
router.get('/', function(req, res, next) {
  Band.find({}, function (err, bands) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(students)
    }
  })
});


module.exports = router;
