var mongoose = require('mongoose');

var servidor = "localhost:27017";
var dataBase = "pruebaTecnica";

mongoose.connect(`mongodb:// ${servidor}/ ${dataBase}`)
    .then(conexion => {
        console.log("se conecto a mongoose");
    }).catch(error => {
        console.log(error);
    })




