CREATE DATABASE IF NOR EXISTS Easy_Facture;


CREATE TABLE Clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Direccion VARCHAR(255),
    CorreoElectronico VARCHAR(255),
    Telefono VARCHAR(15)
);


INSERT INTO Clientes (Nombre, Direccion, CorreoElectronico, Telefono)
VALUES ('Cliente 1', 'Calle 123, Ciudad', 'cliente1@example.com', '123-456-7890');


CREATE TABLE Productos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(255),
    PrecioUnitario DECIMAL(10, 2),
    CodigoProducto VARCHAR(50),
    Categoria VARCHAR(50)
);

INSERT INTO Productos (Descripcion, PrecioUnitario, CodigoProducto, Categoria)
VALUES ('Producto A', 50.00, 'PROD001', 'Electrónica');


CREATE TABLE Facturas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroFactura VARCHAR(20),
    FechaEmision DATE,
    FechaVencimiento DATE,
    Estado VARCHAR(50)
);

INSERT INTO Facturas (NumeroFactura, FechaEmision, FechaVencimiento, Estado)
VALUES ('FAC001', '2023-09-13', '2023-09-30', 'Pendiente');


CREATE TABLE DetalleFactura (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FacturaID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2)
);

INSERT INTO DetalleFactura (FacturaID, ProductoID, Cantidad, PrecioUnitario, Subtotal)
VALUES (1, 1, 3, 50.00, 150.00);


CREATE TABLE Impuestos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreImpuesto VARCHAR(50),
    TasaImpuesto DECIMAL(5, 2),
    MontoImpuesto DECIMAL(10, 2)
);

INSERT INTO Impuestos (NombreImpuesto, TasaImpuesto, MontoImpuesto)
VALUES ('IVA', 0.18, 27.00);


CREATE TABLE FormasPago (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreFormaPago VARCHAR(50)
);

INSERT INTO FormasPago (NombreFormaPago)
VALUES ('Tarjeta de Crédito');


CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(50),
    CorreoElectronico VARCHAR(255),
    Contrasena VARCHAR(255),
    NivelAcceso INT
);

INSERT INTO Usuarios (NombreUsuario, CorreoElectronico, Contrasena, NivelAcceso)
VALUES ('Usuario1', 'usuario1@example.com', 'contrasena1', 1);


CREATE TABLE ConfiguracionEmpresa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreEmpresa VARCHAR(255),
    DireccionEmpresa VARCHAR(255),
    ContactoEmpresa VARCHAR(255),
    InformacionImpuestos VARCHAR(255)
);

INSERT INTO ConfiguracionEmpresa (NombreEmpresa, DireccionEmpresa, ContactoEmpresa, InformacionImpuestos)
VALUES ('Mi Empresa', 'Avenida Principal, Ciudad', 'contacto@miempresa.com', 'RUC: 123456789');


CREATE TABLE MetodosEnvio (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreMetodoEnvio VARCHAR(50)
);

INSERT INTO MetodosEnvio (NombreMetodoEnvio)
VALUES ('Entrega a domicilio');


CREATE TABLE Auditoria (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Accion VARCHAR(255),
    FechaAccion TIMESTAMP,
    UsuarioID INT
);

INSERT INTO MetodosEnvio (NombreMetodoEnvio)
VALUES ('Entrega a domicilio');


CREATE TABLE PlantillasFactura (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombrePlantilla VARCHAR(255),
    ContenidoPlantilla TEXT
);

INSERT INTO PlantillasFactura (NombrePlantilla, ContenidoPlantilla)
VALUES ('Plantilla Predeterminada', 'Esta es la plantilla predeterminada para las facturas.');


CREATE TABLE HistoricoFacturacion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroFactura VARCHAR(20),
    FechaEmision DATE,
    ClienteID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Total DECIMAL(10, 2),
    Estado VARCHAR(50),
    FechaEntrega DATE
);

INSERT INTO HistoricoFacturacion (NumeroFactura, FechaEmision, ClienteID, ProductoID, Cantidad, PrecioUnitario, Total, Estado, FechaEntrega)
VALUES ('FAC001', '2023-09-13', 1, 1, 3, 50.00, 150.00, 'Entregada', '2023-09-15');

