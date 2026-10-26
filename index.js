// Nicolay Barreno: Método GET
//Escenario real: datos de multicines para una entrada 
const express = require('express');
const app = express();
const port = 3000;

// Método GET para consultar la información de un recurso (Lectura)
app.get("/multicines", (req, res) => {
    res.json({
        producto: "Entrada General 2D Multicines",
        codigo_referencia: "MUL-2026-001",
        precio: 6.20,
        moneda: "USD",
        complejosDisponibles: [
            "Multicines CCI",
            "Multicines El Recreo",
            "Multicines Scala Shopping",
            "Multicines Condado"
        ],
        descripcion: "Boleto válido para funciones en formato 2D estándar. Sujeto a disponibilidad de la sala.",
        url: "https://www.multicines.com.ec/"
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
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
