const express = require('express');
const app = express();
const port = 3000;

// Metodo GET para consultar la informacion de un recurso (Lectura)
app.get("/boleto-cine", (req, res) => {
    res.json({
        producto: "Boleto Entrada General 2D",
        codigo_referencia: "CINE-2026-001",
        precio: 6.50,
        moneda: "USD",
        complejosDisponibles: [
            "Cineplex Centro",
            "Cineplex Norte",
            "Cineplex Sur"
        ],
        descripcion: "Pase valido para funciones 2D en horarios regulares. No aplica para estrenos.",
        url: "https://www.cineplex-ejemplo.com/tickets/general"
    });
});

// Inicializacion del servidor HTTP en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});