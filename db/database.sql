CREATE DATABASE IF NOR EXISTS Easy_Facture;


CREATE TABLE Clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Direccion VARCHAR(255),
    CorreoElectronico VARCHAR(255),
    Telefono VARCHAR(15)
);

CREATE TABLE Productos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(255),
    PrecioUnitario DECIMAL(10, 2),
    CodigoProducto VARCHAR(50),
    Categoria VARCHAR(50)
);

CREATE TABLE Facturas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroFactura VARCHAR(20),
    FechaEmision DATE,
    FechaVencimiento DATE,
    Estado VARCHAR(50)
);

CREATE TABLE DetalleFactura (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FacturaID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2)
);

CREATE TABLE Impuestos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreImpuesto VARCHAR(50),
    TasaImpuesto DECIMAL(5, 2),
    MontoImpuesto DECIMAL(10, 2)
);

CREATE TABLE FormasPago (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreFormaPago VARCHAR(50)
);

CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(50),
    CorreoElectronico VARCHAR(255),
    Contrasena VARCHAR(255),
    NivelAcceso INT
);

CREATE TABLE ConfiguracionEmpresa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreEmpresa VARCHAR(255),
    DireccionEmpresa VARCHAR(255),
    ContactoEmpresa VARCHAR(255),
    InformacionImpuestos VARCHAR(255)
);

CREATE TABLE MetodosEnvio (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreMetodoEnvio VARCHAR(50)
);

CREATE TABLE Auditoria (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Accion VARCHAR(255),
    FechaAccion TIMESTAMP,
    UsuarioID INT
);

CREATE TABLE PlantillasFactura (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombrePlantilla VARCHAR(255),
    ContenidoPlantilla TEXT
);

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
