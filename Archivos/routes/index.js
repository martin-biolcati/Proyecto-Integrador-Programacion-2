var express = require('express');
var router = express.Router();
const user = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', user.index)

module.exports = router;
