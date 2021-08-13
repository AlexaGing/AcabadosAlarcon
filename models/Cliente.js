const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: Number,
    servicio: String

});


module.exports = mongoose.model('Cliente', ClienteSchema);

