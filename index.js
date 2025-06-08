const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const productosRoutes = require("./routes/productos.routes");
const clientesRoutes = require("./routes/clientes.routes");
const ventasRoutes = require("./routes/ventas.routes");

app.use("/productos", productosRoutes);
app.use("/clientes", clientesRoutes);
app.use("/ventas", ventasRoutes);

app.get("/", (req, res) => {
  res.send("API de Taller2 funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
