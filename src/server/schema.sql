DROP DATABASE IF EXISTS coinDB;
CREATE DATABASE coinDB;

USE coinDB;

CREATE TABLE coins (
  id INT NOT NULL AUTO_INCREMENT,
  coinName VARCHAR(50),
  favorite TINYINT,
  PRIMARY KEY (id)
);

-- mysql -u root < server/schema.sql
