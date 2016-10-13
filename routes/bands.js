var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  res.render('bands')
  console.log('does anything happen after rendering?');
})

module.exports = router;
