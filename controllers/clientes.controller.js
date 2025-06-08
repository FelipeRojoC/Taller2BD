const clientesService = require("../services/clientes.service");

exports.obtenerTodos = (req, res) => {
  clientesService.obtenerTodos((err, rows) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener clientes" });
    res.json(rows);
  });
};

exports.obtenerNormales = (req, res) => {
  clientesService.obtenerPorTipo("normal", (err, rows) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Error al obtener clientes normales" });
    res.json(rows);
  });
};

exports.obtenerPremium = (req, res) => {
  clientesService.obtenerPorTipo("premium", (err, rows) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Error al obtener clientes premium" });
    res.json(rows);
  });
};
