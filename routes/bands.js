var express = require('express');
var router = express.Router();
var Band = require('../models/band')
const _ = require('lodash');


router.use((req, res, next) => {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
  next()
})

router.use('/:bandId', function (req, res, next) {
  console.log(req.user.sub);
  Band.findOne({_id: req.params.bandId, userId: req.user.sub}, (err, band) => {
    if (err) {
      res.status(500).send()
    } else {
      if (band) {
        res.band = band;
        next()
      } else {
        res.status(404).send()
      }
    }
  })
})

router.get('/', (req, res, next) => {
  Band.find({userId:req.user.sub}, (err, bands) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(bands)
    }
  })
});

router.post('/', (req, res, next) => {
  const band = new Band(req.body)
  band.userId = req.user.sub;
  band.save((err) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(band)
    }
  })
})



router.get('/:bandId', (req, res, next) => {
  res.json(res.band)
})

router.delete('/:bandId', (req, res, next) => {
  res.band.remove((err) => {
    if (err) {
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})

router.put('/:todoId', function (req, res, next) {
  res.band = Object.assign(res.band, req.body)
  res.band.save(function (err, updatedBand) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(updatedBand)
    }
  })
})


module.exports = router;
