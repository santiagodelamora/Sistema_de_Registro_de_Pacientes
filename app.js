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

// Ruta personalizada
app.get('/api/alumnos', (solicitud, respuesta) => {
    respuesta.json([
        {
            nombre: "Santiago Nicolás De la mora Núñez",
            materia: "Aplicaciones web",
            tecnologiasQueDomina: [
                "HTML",
                "CSS",
                "JavaScript",
                "Express.js",
                "React",
                "Vue",
                "PHP",
                "Python",
                "Java",
                "Java Enterprise Edition (JSP y Servlets)",
                "JavaFX",
                "Android SDK"
            ]
        },
        {
            nombre: "Victor Manuel Almendarez García",
            materia: "Aplicaciones web",
            tecnologiasQueDomina: [
                "C#",
                "Claude Code",
                "Codex"
            ]
        },
        {
            nombre: "Roger Alejandro Aguilar Núñez",
            materia: "Aplicaciones web",
            tecnologiasQueDomina: [
                "C#",
                "Claude Code",
                "Codex"
            ]
        },
        {
            nombre: "Joel Canche Chac",
            materia: "Aplicaciones web",
            tecnologiasQueDomina: [
                "C#",
                "Claude Code",
                "Codex"
            ]
        }
    ]);
});

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});