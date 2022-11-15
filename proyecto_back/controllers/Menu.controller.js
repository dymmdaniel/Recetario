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
        response.msg= "Error al crear el menú"
        res.json(response)
        return;
        }
        response.exito=true,
        response.msg= "El menú ha sido creado"
        res.json(response)
    })

}

exports.find = function(req,res){
    Menu.find(function(err,menus){
        res.json(menus)
    })
}

exports.findOne = function(req,res){
    Menu.findOne({nombreReceta: req.params.nombreReceta},function(err,menus){
        res.json(menus)
    })
}

exports.update = function(req,res){
    let menu = {
        usuarioId: req.body.usuarioId,
        clasificacionId: req.body.clasificacionId,
        nombreReceta: req.body.nombreReceta,
        descripcion: req.body.descripcion,
        diaSemana: req.body.diaSemana,
        diaPreparacion: req.body.diaPreparacion
    }
    Menu.findOneAndUpdate({nombreReceta: req.params.nombreReceta},{$set:menu},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al moficiar el menú " + err
            res.json(response)
            return
        }

        response.exito = true,
        response.msg = "El menú se modificó correctamente"
        res.json(response)
    })
    
}

exports.remove = function(req,res){
    
    Menu.findOneAndDelete({nombreReceta: req.params.nombreReceta}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el menú"
            res.json(response)
            return
        }

        response.exito = true,
        response.msg = "El menú ha sido eliminadó"
        res.json(response)
    })
}

