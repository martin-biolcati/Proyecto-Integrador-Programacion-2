var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/usuarios')

router.get('/register', usuarios.register)
router.get('/login', usuarios.login)
router.get('/perfil', usuarios.perfil)
router.get('/editar', usuarios.perfilEdit)
module.exports = router;
