const db = require("../db/db");

exports.registrarVenta = (id_cliente, fecha, productos, callback) => {
  // Insertar venta
  const insertVenta = "INSERT INTO ventas (id_cliente, fecha) VALUES (?, ?)";
  db.query(insertVenta, [id_cliente, fecha], (err, result) => {
    if (err) return callback(err);
    const ventaId = result.insertId;

    // Insertar detalle
    const insertDetalle =
      "INSERT INTO detalle_venta (id_venta, id_producto, cantidad) VALUES ?";
    const detalleValues = productos.map((p) => [
      ventaId,
      p.id_producto,
      p.cantidad,
    ]);

    db.query(insertDetalle, [detalleValues], (err2) => {
      if (err2) return callback(err2);
      callback(null, ventaId);
    });
  });
};

exports.detalleVentaCliente = (clienteId, fecha, callback) => {
  const query = `
    SELECT v.id AS venta_id, v.fecha, p.nombre, dv.cantidad, p.precio,
      IF(c.tipo = 'premium', 0.8 * (dv.cantidad * p.precio), dv.cantidad * p.precio) AS subtotal,
      c.tipo
    FROM ventas v
    JOIN detalle_venta dv ON v.id = dv.id_venta
    JOIN productos p ON p.id = dv.id_producto
    JOIN clientes c ON c.id = v.id_cliente
    WHERE v.id_cliente = ? AND v.fecha = ?
  `;
  db.query(query, [clienteId, fecha], callback);
};

exports.ventasAnuales = (callback) => {
  const query = `
    SELECT p.id, p.nombre, SUM(dv.cantidad) AS total_vendido
    FROM detalle_venta dv
    JOIN productos p ON p.id = dv.id_producto
    JOIN ventas v ON v.id = dv.id_venta
    WHERE YEAR(v.fecha) = YEAR(CURDATE())
    GROUP BY p.id
  `;
  db.query(query, callback);
};
