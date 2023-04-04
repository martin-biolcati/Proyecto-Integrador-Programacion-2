const controlador = {
    register: function(req,res){
        res.render(
            'register'
        )
    },
    login: function(req,res){
        res.render(
            'login'
        )
    },
    regresar: function(req,res){
        res.render(
            'index'
        )
    }
}

module.exports = controlador;