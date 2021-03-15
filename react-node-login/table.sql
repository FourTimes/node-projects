CREATE TABLE clients (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  client VARCHAR(25) NOT NULL,
  bank VARCHAR(25) NOT NULL,
  branch VARCHAR(25) NOT NULL,
  country VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  district VARCHAR(25) NOT NULL,
  code VARCHAR(8) NOT NULL
)


CREATE TABLE createtransaction (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  transactiondate varchar(30),
  client VARCHAR(25) NOT NULL,
  bank VARCHAR(25) NOT NULL,
  branch VARCHAR(25) NOT NULL,
  country VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  district VARCHAR(25) NOT NULL,
  code VARCHAR(8) NOT NULL,
  amount VARCHAR(15) NOT NULL
)

CREATE TABLE login (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username varchar(30),
  password VARCHAR(25) NOT NULL
)


insert into login values(null,'test','test');


# sql function react app services power bi azure analytics
