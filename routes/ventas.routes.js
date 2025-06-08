const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventas.controller");

router.post("/", ventasController.registrarVenta);
router.get("/", ventasController.detalleVentaCliente);
router.get("/stats/anuales", ventasController.ventasAnuales);

module.exports = router;
