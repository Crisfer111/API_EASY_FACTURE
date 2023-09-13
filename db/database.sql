CREATE DATABASE IF NOR EXISTS companydb;
USE companydb;
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE employee;

INSERT INTO employee VALUES
(20, 'jose', 1000),
(21, 'Maria', 1500),
(22, 'Eduardo', 2000),
(23, 'Yineth', 2500);

