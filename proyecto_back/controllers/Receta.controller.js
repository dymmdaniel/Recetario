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

exports.find = function(req,res){
    Receta.find(function(err,recetas){
        res.json(recetas);
    })
}

exports.findOne = function(req,res){
    Receta.findOne({nombre: req.params.nombre},function(err,recetas){
        res.json(recetas)
    })
}

exports.update = function(req,res){
    let receta = {
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
    }
    Receta.findOneAndUpdate({nombre: req.body.nombre},{$set:receta},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar la receta " + err
            res.json(response)
            return
        }

        response.exito = true,
        response.msg = "La receta se modifico correctamente"
        res.json(response)
    })
    
}
exports.remove = function(req,res){
    
    Receta.findOneAndDelete({nombre: req.params.nombre}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar la receta"
            res.json(response)
            return
        }

        response.exito = true,
        response.msg = "La receta ha sido eliminada"
        res.json(response)
    })
}


