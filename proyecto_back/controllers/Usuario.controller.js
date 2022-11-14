const Usuario = require('../models/Usuario');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.login = function (req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({
        nombre : req.body.nombre,
        usuario : req.body.usuario,
        pass: hashedpass
    },
    function(err,usuario){
        let response = {
            token:null
        }
        if(usuario!=null){
            response.token = jwt.sign({
                id:usuario._id,
                nombre:usuario.nombre,
                usuario:usuario.usuario
            },
            "_recret_",
                {expiresIn: '12h'}
            )
        }
        res.json(response);
    }
    );
}

exports.registro = function (req, res) {
    const {nombre,usuario,pass} = req.body;
    const nuevoUsuario = new Usuario({nombre,usuario,pass}); 
    nuevoUsuario.save(function(err){
        if(err){
        console.log=false,
        response.exito=false,
        response.msg= "Error al crear el usuario"
        res.json(response)
        return;
        }
        response.exito=true,
        response.msg= "El usuario se ha creado correctamente"
        res.json(response)
    });
}