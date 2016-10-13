var express = require('express');
var router = express.Router();
var _ = require('lodash');

var Band = require('../models/band');

module.exports = router;

router.get('/', function (res, res, next) {
  Band.find({}, function (err, bands) {
    if(err){
      res.status(500).send();
    }else{
      res.json(bands);
    }
  })
})
