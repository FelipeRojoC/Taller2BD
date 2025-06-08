const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller");

router.get("/", clientesController.obtenerTodos);
router.get("/normal", clientesController.obtenerNormales);
router.get("/premium", clientesController.obtenerPremium);

module.exports = router;
