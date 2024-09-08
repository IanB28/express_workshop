const express = require('express');
const app = express();

/*
Verbos HTTP
GET ---- PETICION AL SERVIDOR
POST---GUARDAR O PUBLICAR ALGO 
PATCH----ACTUALIZACION DE UN DATO ESPECIFICO
PUT-----ACTUALIZAR TODOS LOS ELEMENTOS
DELETE
*/ 
app.get('/', (req, res, next) =>{ 
    res.status(200);
    res.send('Bienvenido');
} )

app.listen(3000, () => {
    console.log('Server is running...');
});
