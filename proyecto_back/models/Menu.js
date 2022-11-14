const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema  = new Schema({
    usuarioId: String,
    clasificacionId: String,
    nombreReceta: String,
    descripcion: String,
    diaSemana: String,
    diaPreparacion: Date
});

module.exports = mongoose.model('Menu',MenuSchema);