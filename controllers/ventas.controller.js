const ventasService = require("../services/ventas.service");

exports.registrarVenta = (req, res) => {
  const { id_cliente, fecha, productos } = req.body;

  if (!id_cliente || !fecha || !productos || productos.length === 0)
    return res.status(400).json({ error: "Faltan datos" });

  ventasService.registrarVenta(id_cliente, fecha, productos, (err, ventaId) => {
    if (err) return res.status(500).json({ error: "Error al registrar venta" });
    res.status(201).json({ mensaje: "Venta registrada", id_venta: ventaId });
  });
};

exports.detalleVentaCliente = (req, res) => {
  const { cliente, fecha } = req.query;
  if (!cliente || !fecha)
    return res
      .status(400)
      .json({ error: "Faltan parámetros: cliente y fecha" });

  ventasService.detalleVentaCliente(cliente, fecha, (err, data) => {
    if (err) return res.status(500).json({ error: "Error al obtener ventas" });
    res.json(data);
  });
};

exports.ventasAnuales = (req, res) => {
  ventasService.ventasAnuales((err, data) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener estadística" });
    res.json(data);
  });
};
