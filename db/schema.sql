DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
id int auto_increment,
burger_name varchar(30),
devoured boolean DEFAULT false,
date DATETIME ,
PRIMARY KEY(id)
);