const data = require('../db/data/data');
const controladores={
    productoAdd: function(req,res){
        res.render(
            'product-add',{ usuarioLogueado: true,}
        )
    },
    productos: function(req,res){
        res.render(
            'index',{ usuarioLogueado: false, productos: data.productos}
        )
    },
    descripcion: function(req,res){
        res.render(
            'product', { usuarioLogueado: true,}
        )
    }
}

module.exports = controladores;