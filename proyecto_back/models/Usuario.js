const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema  = new Schema({
    nombre: String,
    usuario: String,
    pass: String
});

module.exports = mongoose.model('Usuario',UsuarioSchema);