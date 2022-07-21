#테이블 컬럼 변경
#ALTER TABLE customer rename column customer_ID2 to customer_ID;

CREATE SCHEMA foodtruck DEFAULT CHARACTER SET UTF8;
USE foodtruck;

CREATE TABLE Customer(
	customer_ID VARCHAR(10) PRIMARY key,
	customer_pw INT(10) NOT NULL,
	phone_number INT(11),
	address CHAR(30)
);

SELECT * FROM customer;
DESC customer;


CREATE TABLE Store(
	store_ID INT(8) PRIMARY KEY,
	address VARCHAR(20) NOT NULL,
	phone INT(11) NOT NULL,
	owner_ID VARCHAR(10),
	FOREIGN KEY (owner_ID) REFERENCES StoreOwner(owner_ID) ON UPDATE cascade
);

DESC Store;

CREATE TABLE StoreOwner(
	owner_ID VARCHAR(10) PRIMARY KEY,
	owner_pw INT(10) NOT null
);

DESC StoreOwner;

CREATE TABLE Menu(
	store_ID INT(8),
	food_name VARCHAR(20) NOT NULL,
	price INT(8) NOT NULL,
	FOREIGN KEY (store_ID) REFERENCES Store(store_ID) ON UPDATE cascade
);

DESC storeowner;

CREATE TABLE Admin(
	admin_ID INT(10) PRIMARY key,
	admin_pw INT(10)
);

CREATE TABLE Festival(
	festival_name VARCHAR(20) PRIMARY KEY,
	START INT(10),
	END INT(10),
	address VARCHAR(20)
);