DROP DATABASE IF EXISTS nev;
CREATE DATABASE nev;
USE nev;

CREATE table burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured boolean,
    PRIMARY KEY (id)
)