var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/usuarios')

router.get('/register/', usuarios.register)
module.exports = router;
