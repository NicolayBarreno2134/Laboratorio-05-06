const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Servidor API funcionando. Rutas disponibles: /boleto-cine y /laptop-asus");
});


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

// Gregory Araujo: Métodos PUT y DELETE
// Escenario real: Tienda de Tecnología (Catálogo de Laptops)

// PUT: Actualización de datos
app.put("/laptop-asus", (req, res) => {
    /* 
    Aplicación práctica: Este método se utiliza cuando el administrador de la tienda
    necesita actualizar información del producto, por ejemplo, aplicar un descuento en el precio 
    o agregar una nueva sucursal a los "localesDisponibles"
    */
    res.json({
        mensaje: "Producto actualizado correctamente",
        datosActualizados: {
            producto: "Laptop Gamer ASUS ROG Strix",
            referencia: "ASUS-ROG-2026",
            precio: 1299.99, // El precio simulado ha bajado
            moneda: "USD",
            localesDisponibles: [
                "TecnoMega Quito",
                "TecnoMega Guayaquil",
                "TecnoMega Cuenca" // Nueva sucursal añadida
            ],
            descripcion: "Laptop para gaming de alto rendimiento con tarjeta RTX 4070. ¡Ahora en descuento especial!",
            url: "https://www.tecnomega.com/asus-rog-strix/p"
        }
    });
});

// DELETE: Eliminación de un registro
app.delete("/laptop-asus", (req, res) => {
    /* 
    Aplicación práctica: Este endpoint se ejecuta cuando un modelo de laptop queda permanentemente 
    sin stock, es descontinuado por el fabricante, o el administrador decide retirarlo del catálogo web. 
    */
    res.json({
        mensaje: "Producto eliminado exitosamente del catálogo",
        referenciaEliminada: "ASUS-ROG-2026",
        estado: "Inactivo"
    });
});

// Inicializacion del servidor HTTP en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
