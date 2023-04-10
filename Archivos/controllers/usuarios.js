const controlador = {
    register: function(req,res){
        res.render(
            'register', { usuarioLogueado: false,}
        )
    },
    login: function(req,res){
        res.render(
            'login',{ usuarioLogueado: false,}
        )
    },
    regresar: function(req,res){
        res.render(
            'index', { usuarioLogueado: false,}
        )
    },
    logo: function(req,res){
        res.render(
            'index', { usuarioLogueado: false,}
        )
    },
    perfil: function(req,res){
        res.render(
            'profile', { usuarioLogueado: true,}
        )
    }
}

module.exports = controlador;