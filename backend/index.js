var express = require('express');
var cors = require('cors')
var conexion = require('./database/database');


var app = express();
app.use(express.static(__dirname + '/'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//nuevas rutas



app.listen(5555, () => {
    console.log("Servidor corriendo en el puerto 3333");
});