// frontend/js/main.js
const API_URL = "http://localhost:3000";

// Navegación por secciones
function mostrarSeccion(id) {
  document
    .querySelectorAll(".seccion")
    .forEach((sec) => (sec.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

// Registrar Producto
document
  .getElementById("formProducto")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      codigo: document.getElementById("codigo").value,
      nombre: document.getElementById("nombre").value,
      stock: parseInt(document.getElementById("stock").value),
      precio: parseFloat(document.getElementById("precio").value),
    };

    const res = await fetch(`${API_URL}/productos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message || "Producto registrado");
    e.target.reset();
  });

// Registrar Cliente
document.getElementById("formCliente").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    codigo: document.getElementById("codigoCliente").value,
    nombre: document.getElementById("nombreCliente").value,
    ciudad: document.getElementById("ciudad").value,
    tipo: document.getElementById("tipoCliente").value,
  };

  const res = await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  alert(result.message || "Cliente registrado");
  e.target.reset();
});

// Registrar Venta
document.getElementById("formVenta").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    clienteCodigo: document.getElementById("codigoVentaCliente").value,
    fecha: document.getElementById("fechaVenta").value,
    productos: JSON.parse(document.getElementById("productosVenta").value),
  };

  const res = await fetch(`${API_URL}/ventas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  alert(result.message || "Venta registrada");
  e.target.reset();
});
async function listarProductos() {
  const res = await fetch(`${API_URL}/productos`);
  const data = await res.json();

  let html = "<h3>Productos disponibles</h3><ul>";
  data.forEach((p) => {
    html += `<li>${p.codigo} - ${p.nombre} - $${p.precio} (${p.stock} unidades)</li>`;
  });
  html += "</ul>";

  document.getElementById("resultadoConsulta").innerHTML = html;
}

async function listarClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  const data = await res.json();

  let html = "<h3>Clientes</h3><ul>";
  data.forEach((c) => {
    html += `<li>${c.codigo} - ${c.nombre} (${c.tipo}) - ${c.ciudad}</li>`;
  });
  html += "</ul>";

  document.getElementById("resultadoConsulta").innerHTML = html;
}
  