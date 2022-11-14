const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecetaSchema  = new Schema({
    clasificacionId: String,
    nombre: String,
    imagen: String,
    descripcion: String,
    tiempoPreparacion: Number,
    porciones: Number,
    dificultad: Number,
    ingredientes: String,
    instrucciones: String,
    tipo: Boolean
});

module.exports = mongoose.model('Receta',RecetaSchema);