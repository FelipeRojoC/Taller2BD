const db = require("../db/db");

exports.crearProducto = (nombre, stock, precio, callback) => {
  const query =
    "INSERT INTO productos (nombre, stock, precio) VALUES (?, ?, ?)";
  db.query(query, [nombre, stock, precio], callback);
};

exports.eliminarProducto = (id, callback) => {
  const query = "UPDATE productos SET activo = FALSE WHERE id = ?";
  db.query(query, [id], callback);
};

exports.actualizarPrecio = (id, precio, callback) => {
  const query = "UPDATE productos SET precio = ? WHERE id = ?";
  db.query(query, [precio, id], callback);
};
  
exports.incrementarStock = (id, cantidad, callback) => {
  const query = "UPDATE productos SET stock = stock + ? WHERE id = ?";
  db.query(query, [cantidad, id], callback);
};
  
exports.obtenerProductosActivos = (callback) => {
  const query = "SELECT * FROM productos WHERE activo = TRUE";
  db.query(query, callback);
};
  
exports.obtenerVendidosSemana = (callback) => {
  const query = `
      SELECT p.id, p.nombre, SUM(dv.cantidad) AS total_vendido
      FROM detalle_venta dv
      JOIN productos p ON p.id = dv.id_producto
      JOIN ventas v ON v.id = dv.id_venta
      WHERE WEEK(v.fecha) = WEEK(CURDATE()) AND YEAR(v.fecha) = YEAR(CURDATE())
      GROUP BY p.id
    `;
  db.query(query, callback);
};
  