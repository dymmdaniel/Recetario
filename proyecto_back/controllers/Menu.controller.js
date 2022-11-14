const Menu = require("../models/Menu")

let response={
    msg:"",
    exito: false
}

exports.create = function(req,res){
    let menu = new Menu({
        usuarioId: req.body.usuarioId,
        clasificacionId: req.body.clasificacionId,
        nombreReceta: req.body.nombreReceta,
        descripcion: req.body.descripcion,
        diaSemana: req.body.diaSemana,
        diaPreparacion: req.body.diaPreparacion
    })
    menu.save(function(err){
        if(err){
        console.log=false,
        response.exito=false,
        response.msg= "error al crear la receta"+err
        res.json(response)
        return;
        }
        response.exito=true,
        response.msg= "la receta se creo correctamente"
        res.json(response)
    })

}