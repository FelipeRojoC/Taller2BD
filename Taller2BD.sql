CREATE DATABASE IF NOT EXISTS taller2;
USE taller2;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    tipo ENUM('normal', 'premium') NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    precio DECIMAL(10,2) NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

CREATE TABLE detalle_venta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_venta INT,
    id_producto INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES ventas(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

/*Datos de prueba*/
INSERT INTO clientes (nombre, ciudad, tipo) VALUES
('Juan Perez', 'Antofagasta', 'normal'),
('Maria Torres', 'Calama', 'premium'),
('Luis Soto', 'La Serena', 'normal');

INSERT INTO productos (nombre, stock, precio) VALUES
('Cafe Latte', 20, 2500.00),
('Te Verde', 15, 1800.00),
('Brownie', 30, 1500.00),
('Cafe Espresso', 10, 2000.00);

INSERT INTO ventas (id_cliente, fecha) VALUES (2, '2025-06-01');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad) VALUES
(1, 1, 2),
(1, 3, 1);
