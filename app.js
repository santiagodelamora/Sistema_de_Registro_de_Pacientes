/**
 * Descripción: Punto de entrada del backend.
 * Autor: Santiago Nicolás De la mora Núñez
 * Fecha de creación: 27/09/2026
 */

import express from 'express';

const app = express();
const PUERTO = 3000;

app.use(express.static('public'));

app.get('/pacientes', (solicitud, respuesta) => {
    respuesta.json({mensaje: "Lista de pacientes"});
})

app.get('/inicio', (solicitud, respuesta) => {
    respuesta.send("Bienvenido al sistema");
});

app.get('/servicios', (solicitud, respuesta) => {
    respuesta.send("Servicios disponibles");
});

app.get('/api/pacientes', (solicitud, respuesta) => {
    respuesta.json([
        {nombre: "Ana", edad: 25},
        {nombre: "Carlos", edad: 30}
    ]);
});

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});