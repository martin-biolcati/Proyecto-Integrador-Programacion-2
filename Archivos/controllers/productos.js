const controladores={
    productoAdd: function(req,res){
        res.render(
            'product-add',{ usuarioLogueado: true,}
        )
    },
}

module.exports = controladores;