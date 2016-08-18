var express = require('express');
var router = express.Router();
var band = require('../models/band');
const _ = require('lodash');

router.use('/', (req, res, next) => {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
 next()
});


module.exports = router;
