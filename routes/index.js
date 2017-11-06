var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Aparavi Web App Demo' });
});

module.exports = router;