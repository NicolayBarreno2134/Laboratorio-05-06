<div align="center">

**🏛️ Escuela Politécnica Nacional**

**🎓 Escuela de Formación de Tecnólogos**

**💻 Desarrollo de Aplicaciones Web**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

# 🚀 Laboratorio 05-06: API REST con Express

</div>

---

## 📖 Descripción

Este proyecto implementa una API REST con Express que atiende los cuatro métodos HTTP principales, cada uno con un escenario real.

🎬 El método **GET** en `/multicines` consulta la información de una entrada de multicines, con su precio, los complejos disponibles y su descripción.

🎟️ El método **POST** en `/compra-entradas` registra una nueva compra de entradas. Valida los datos recibidos, calcula el precio total y devuelve una confirmación en formato JSON con el número de orden.

📦 Los métodos **PUT** y **DELETE** en `/laptop-asus` gestionan el catálogo de una tienda de tecnología. El método PUT actualiza los datos de un producto, como su precio o sus sucursales disponibles, y el método DELETE elimina un producto del catálogo cuando ya no está disponible.

## 🛠️ Tecnologías

- 🟢 Node.js
- ⚡ Express 5

## ⚙️ Instalación y ejecución

```bash
npm install
node index.js
```

🌐 El servidor se ejecuta en `http://localhost:3000`.

## 📮 Ejemplo de uso (POST)

```bash
curl -X POST http://localhost:3000/compra-entradas \
  -H "Content-Type: application/json" \
  -d '{"complejo":"Multicines CCI","funcion":"Película 2D 19:00","cantidadEntradas":2,"nombreCliente":"Cliente de prueba","correo":"cliente@correo.com"}'
```

✅ Respuesta esperada (`201 Created`):

```json
{
  "mensaje": "Compra registrada correctamente",
  "orden": {
    "numero_orden": "ORD-2026-001",
    "complejo": "Multicines CCI",
    "funcion": "Película 2D 19:00",
    "cantidadEntradas": 2,
    "precioUnitario": 6.2,
    "precioTotal": 12.4,
    "moneda": "USD",
    "nombreCliente": "Cliente de prueba",
    "correo": "cliente@correo.com",
    "estado": "Confirmada"
  }
}
```

## 👥 Integrantes

- 👤 Gregory Araujo
- 👤 Nicolay Barreno
- 👤 Jordy Cajas
