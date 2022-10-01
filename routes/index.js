var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', (req, res) => {
  res.json({
    message: 'hi, are u ok?'
  });
});



module.exports = router;
