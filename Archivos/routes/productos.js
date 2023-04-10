var express = require('express');
var router = express.Router();
const productos = require('../controllers/productos')

router.get('/productAdd', productos.productoAdd)
router.get('/producto', productos.productos)

module.exports = router;