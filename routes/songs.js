var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('These are the songs for '+ res.band.name);
});

module.exports = router;
