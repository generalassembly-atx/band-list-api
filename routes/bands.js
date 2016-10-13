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

/// STEP 3. POST INSIDE REST CLIENT TO TEST '/'

  ///ONCE THAT IS DONE, CREATE GET ROUTE FOR INPUTTED DATA///


// STEP 4. CREATE PUT ROUTE

router.put('/:id', function (req, res, next) {
  var updatedBand = Object.assign(res.band, req.body)
  updatedBand.save(function (err) {
    if(err){
      res.status(500).send();
    }else {
      res.json(band);
    }
  })
});


// STEP . CREATE USE ROUTE

router.use('/', function (req, res, next) {
  Band.findOne(), function (err) {
    if(err){
      res.status(500).send();
    }else {
      res.json(band);
    }
  }
})

router.get('/bands', function (req, res, next) {
  Band.find()
})

module.exports = router;
