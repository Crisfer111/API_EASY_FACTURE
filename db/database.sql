CREATE DATABASE Easy_Facture;

USE Easy_Facture;

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
    Estado VARCHAR(50),
    Descripcion VARCHAR(100),
    ClienteID INT, -- Esta es la columna de clave externa
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ID)
);

INSERT INTO Facturas (NumeroFactura, FechaEmision, FechaVencimiento, Estado)
VALUES ('FAC001', '2023-09-13', '2023-09-30', 'Pendiente');

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


CREATE TABLE Configuracion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreEmpresa VARCHAR(255),
    DireccionEmpresa VARCHAR(255),
    ContactoEmpresa VARCHAR(255),
    InformacionImpuestos VARCHAR(255)
);

INSERT INTO Configuracion (NombreEmpresa, DireccionEmpresa, ContactoEmpresa, InformacionImpuestos)
VALUES ('Mi Empresa', 'Avenida Principal, Ciudad', 'contacto@miempresa.com', 'RUC: 123456789');

CREATE TABLE HistoricoFacturacion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroFactura VARCHAR(20),
    FechaEmision DATE,
    ClienteID INT, -- Esta es la columna de clave externa para Clientes
    ProductoID INT, -- Esta es la columna de clave externa para Productos
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Total DECIMAL(10, 2),
    Estado VARCHAR(50),
    FechaEntrega DATE,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ID)
);

INSERT INTO HistoricoFacturacion (NumeroFactura, FechaEmision, ClienteID, ProductoID, Cantidad, PrecioUnitario, Total, Estado, FechaEntrega)
VALUES ('FAC001', '2023-09-13', 1, 1, 3, 50.00, 150.00, 'Entregada', '2023-09-15');


