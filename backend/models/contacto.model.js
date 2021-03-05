const {Schema, model } = require('mongoose');

const esquemaContacto = new Schema({

    nombre: String,
    usuario: String

});

module.exports = model('contacto', esquemaContacto);
