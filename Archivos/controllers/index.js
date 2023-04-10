const data = require('../db/data/data')

const controller ={
    index: function(req,res){
        res.render('index',{
            courses : data.courses,
            usuarioLogueado: true,
        })
    }}

module.exports = controller