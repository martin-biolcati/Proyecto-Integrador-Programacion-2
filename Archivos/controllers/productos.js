const data = require('../db/data/data');
const controladores={
    productoAdd: function(req,res){
        res.render(
            'product-add',{ usuarioLogueado: true,}
        )
    },
    productos: function(req,res){
        console.log(data);
        res.render(
            'index',{ usuarioLogueado: false, productos: data.productos}
        )
    },
}

module.exports = controladores;