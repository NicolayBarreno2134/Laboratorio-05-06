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

// Jordy: Método POST (Creación) y Respuestas
//Escenario real: registro de compra de entradas para una función de multicines
// Método POST para registrar una nueva compra de entradas (Creación)
app.use(express.json());

let comprasRegistradas = [];
let contadorCompras = 1;

app.post("/compra-entradas", (req, res) => {
    const datos = req.body || {};

    // Validación de campos obligatorios
    const camposObligatorios = ["complejo", "funcion", "cantidadEntradas", "nombreCliente", "correo"];
    const camposFaltantes = camposObligatorios.filter(campo => datos[campo] === undefined || datos[campo] === "");

    if (camposFaltantes.length > 0) {
        return res.status(400).json({
            mensaje: "Datos incompletos. No se pudo registrar la compra",
            camposFaltantes
        });
    }

    // Validación de la cantidad de entradas (número entero mayor a cero)
    if (!Number.isInteger(datos.cantidadEntradas) || datos.cantidadEntradas <= 0) {
        return res.status(400).json({
            mensaje: "La cantidad de entradas debe ser un número entero mayor a cero"
        });
    }

    const nuevaCompra = {
        numero_orden: `ORD-2026-${String(contadorCompras++).padStart(3, "0")}`,
        complejo: datos.complejo,
        funcion: datos.funcion,
        cantidadEntradas: datos.cantidadEntradas,
        precioUnitario: 6.20,
        precioTotal: +(datos.cantidadEntradas * 6.20).toFixed(2),
        moneda: "USD",
        nombreCliente: datos.nombreCliente,
        correo: datos.correo,
        estado: "Confirmada"
    };
    comprasRegistradas.push(nuevaCompra);

    // 201 Created: confirmación de la operación de creación
    res.status(201).json({
        mensaje: "Compra registrada correctamente",
        orden: nuevaCompra
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