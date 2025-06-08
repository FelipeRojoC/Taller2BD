const productosService = require("../services/productos.service");

exports.crearProducto = (req, res) => {
  const { nombre, stock, precio } = req.body;

  if (!nombre || stock == null || precio == null) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  productosService.crearProducto(nombre, stock, precio, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error al registrar el producto" });
    }
    res
      .status(201)
      .json({
        mensaje: "Producto registrado correctamente",
        id: result.insertId,
      });
  });
};

exports.eliminarProducto = (req, res) => {
  const { id } = req.params;
  productosService.eliminarProducto(id, (err, result) => {
    if (err) return res.status(500).json({ error: "Error al eliminar" });
    res.json({ mensaje: "Producto desactivado" });
  });
};

exports.actualizarPrecio = (req, res) => {
  const { id } = req.params;
  const { precio } = req.body;

  if (precio == null) return res.status(400).json({ error: "Falta el precio" });

  productosService.actualizarPrecio(id, precio, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Error al actualizar precio" });
    res.json({ mensaje: "Precio actualizado" });
  });
};

exports.incrementarStock = (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;

  if (!cantidad) return res.status(400).json({ error: "Cantidad requerida" });

  productosService.incrementarStock(id, cantidad, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Error al actualizar stock" });
    res.json({ mensaje: "Stock actualizado" });
  });
};
  
exports.obtenerProductosActivos = (req, res) => {
  productosService.obtenerProductosActivos((err, resultados) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener productos" });
    res.json(resultados);
  });
};
  
exports.obtenerVendidosSemana = (req, res) => {
  productosService.obtenerVendidosSemana((err, resultados) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Error al obtener productos vendidos" });
    res.json(resultados);
  });
};
  