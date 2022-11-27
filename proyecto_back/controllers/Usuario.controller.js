const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

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
            );
            res.json(response);
        }else{
           res.status(401); // Unauthorized
           res.json({
            mensaje: "Contrase y/o usuario invalido"
           });
        }
        
    }
    );
}

exports.registro = function (req, res) {
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    const {nombre,usuario,pass} = req.body;
    const nuevoUsuario = new Usuario({
        nombre,
        usuario,
        pass: hashedpass
    }); 
    nuevoUsuario.save(function(err){
        if(err){
            console.log=false;
            res.json({
                mensaje: "Error al crear el usuario"
            })
        }else{
            res.json({
                mensaje: "El usuario se ha creado correctamente"
            })
        }
    });
}

