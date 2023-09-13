CREATE DATABASE IF NOR EXISTS Easy Facture;


CREATE TABLE cliente (
    id INT(10) NOT NULL AUTO_INCREMENT,
    id_codigo INT (10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) DEFAULT NULL,
    apellido VARCHAR(30) DEFAULT NULL,
    cedula INT (15) DEFAULT NULL,
    direccion VARCHAR (60) DEFAULT NULL,
    celular INT (15) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE productos (
    id INT(10) NOT NULL AUTO_INCREMENT,
    id_codigo INT (15) NOT NULL AUTO_INCREMENT,
    nom_product VARCHAR (45) DEFAULT NULL,
    precio_product INT (10) DEFAULT NULL,
    cantidad INT (15) DEFAULT NULL,
    PRIMARY KEY ()
);

CREATE TABLE responsable (
    id_identificacion INT (15) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    apellido INT (10) DEFAULT NULL,
    celular INT (15) DEFAULT NULL,
    PRIMARY KEY ()
);

