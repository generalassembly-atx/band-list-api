var express = require('express');
var router = express.Router();
var _ = require('lodash');

var Band = require('../models/band');



router.use(function (req, res, next) {
  next()
})

// STEP 1. CREATE INITIAL '/' ROUTE

router.get('/', function (req, res, next) {
  Band.find({}, function (err, bands) {
    if(err){
      res.status(500).send();
    }else{
      res.json(bands);
    }
  })
});


//STEP 2. CREATE POST ROUTE
router.post('/',function (req, res, next) {
  var band = new Band(req.body);
  band.save(function (err) {
    if(err){
      res.status(500).send();
    }else {
      res.json(band);
    }
  })
});

router.get('/bands', function (req, res, next) {
  Band.find()
})

module.exports = router;
