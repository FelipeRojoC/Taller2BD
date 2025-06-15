# ☕ Vitoko’s Coffee — Taller 2 de Base de Datos

Vitoko’s Coffee es una cafetería ficticia que permite la gestión de productos, clientes y ventas, conectando un **backend en Node.js con MySQL** y un **frontend en HTML/JS puro**.

---

## 📌 ¿Qué hace este sistema?

- ✅ Registrar productos con código, nombre, stock y precio
- ✅ Registrar clientes normales o premium (con ciudad)
- ✅ Registrar ventas indicando cliente, fecha y productos vendidos
- ✅ Calcular automáticamente:
  - 20% de descuento para clientes premium (antes de propina)
  - 10% adicional por concepto de propina
- ✅ Listar productos disponibles
- ✅ Listar todos los clientes

---

## 🛠️ ¿Cómo ejecutar el proyecto?

### 1. Clona el repositorio

```bash
git clone https://github.com/FelipeRojoC/Taller2BD.git
cd Taller2BD
```

### 2. Instala dependencias del backend

```bash
npm install
```

### 3. Inicia el backend

```bash
npm start
```

Esto iniciará el servidor en http://localhost:3000 y verás el mensaje:

```
API de Taller2 funcionando!
```

### 4. Abre el frontend

Abre el archivo `frontend/index.html` directamente en tu navegador:

- Haz doble clic sobre el archivo `index.html` dentro de la carpeta `frontend`
- O arrástralo al navegador (Chrome, Firefox, Edge, etc.)

✅ Desde ahí puedes registrar productos, clientes, ventas y hacer consultas.

---

## ⚙️ Requisitos

- Node.js 16 o superior
- MySQL 8.0 (base de datos creada previamente)
- Navegador web moderno (Chrome, Firefox, Edge)

---

## 📁 Estructura del proyecto

```
├── backend/               # Backend Node.js con Express
│   └── (rutas, controladores, modelo de base de datos)
├── frontend/              # Frontend en HTML/CSS/JS
│   ├── index.html
│   ├── js/
│   │   └── main.js
│   └── css/
│       └── style.css
├── base_de_datos.sql      # Script con CREATE e INSERTS (opcional)
├── package.json
└── README.md
```

---

## 📅 Entrega

🗓️ 15 de junio de 2025, hasta las 23:59 hrs.

---

## 👨‍💻 Autores

- Felipe Rojo
- Marko Bermudez
- Ingeniería en Computación e Informática  
- Curso: Bases de Datos
