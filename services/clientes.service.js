const db = require("../db/db");

exports.obtenerTodos = (callback) => {
  const query = "SELECT * FROM clientes WHERE activo = TRUE";
  db.query(query, callback);
};

exports.obtenerPorTipo = (tipo, callback) => {
  const query = "SELECT * FROM clientes WHERE tipo = ? AND activo = TRUE";
  db.query(query, [tipo], callback);
};
