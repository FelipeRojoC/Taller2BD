const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");

router.post("/", productosController.crearProducto);
router.delete("/:id", productosController.eliminarProducto);
router.put("/:id", productosController.actualizarPrecio);
router.patch("/:id/stock", productosController.incrementarStock);
router.get("/", productosController.obtenerProductosActivos);
router.get("/recientes", productosController.obtenerVendidosSemana);


module.exports = router;
