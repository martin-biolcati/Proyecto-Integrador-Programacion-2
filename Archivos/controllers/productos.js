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
            'product', { 
                usuarioLogueado: true,
                productos: data.productos,
                usuario: data.usuario,
                comentarios: data.comentarios
            }
        )
    }
}

module.exports = controladores;