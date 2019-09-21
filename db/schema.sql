DROP DATABASE IF EXISTS burers_DB 

CREATE DATABASE burgers_DB;

USE burgers_DB ;


CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(50),
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
