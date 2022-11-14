const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClasificacionSchema  = new Schema({
    nombre: String
});

module.exports = mongoose.model('Clasificacion',ClasificacionSchema);