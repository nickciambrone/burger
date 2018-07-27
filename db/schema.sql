
CREATE DATABSE burger_db;
USE burger_db;

CREATE TABLE burger (
    id int AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)