var express = require('express');
var router = express.Router();
var cors = require('cors'); // import the module


var app = express();
app.use(cors()); // Enable CORS

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
