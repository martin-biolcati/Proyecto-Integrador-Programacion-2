const data = require('../db/data/data');
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
    perfil: function(req,res){
        res.render(
            'profile', { 
                usuarioLogueado: true,
                productos: data.productos
            }
        )
    },
    perfilEdit: function(req,res){
        res.render(
            'editar', { 
                usuarioLogueado: true,
                productos: data.productos
            }
        )
    }
}

module.exports = controlador;