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
                id : data.id,
                productos: data.productos,
                usuario: data.usuario,
                comentarios: data.comentarios
            }
        )
    },
    buscador: function(req,res){
        res.render(
            'buscador', { 
                usuarioLogueado: true,
                productos: data.productos,
            }
        )
    }
}

module.exports = controladores;