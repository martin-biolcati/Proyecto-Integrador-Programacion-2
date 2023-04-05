var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/usuarios')

router.get('/register', usuarios.register)
router.get('/login', usuarios.login)
router.get('/regresar', usuarios.regresar)
router.get('/logo', usuarios.logo)
module.exports = router;
