/**
 * Descripción: Punto de entrada del backend.
 * Autor: Santiago Nicolás De la mora Núñez
 * Fecha de creación: 27/09/2026
 */

import express from 'express';

const app = express();
const PUERTO = 3000;

app.use(express.static('public'));

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});