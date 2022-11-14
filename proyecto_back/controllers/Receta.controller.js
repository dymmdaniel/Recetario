const Receta = require("../models/Receta")

let response={
    msg:"",
    exito: false
}

exports.create = function(req,res){
    let receta = new Receta({
        clasificacionId: req.body.clasificacionId,
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        tiempoPreparacion: req.body.tiempoPreparacion,
        porciones: req.body.porciones,
        dificultad: req.body.dificultad,
        ingredientes: req.body.ingredientes,
        instrucciones: req.body.instrucciones,
        tipo: req.body.tipo
    })
    receta.save(function(err){
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