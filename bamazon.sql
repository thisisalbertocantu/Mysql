DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,4) NULL,
stock_quantity DECIMAL(10,4) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Salsa", "Food", "23.50", "4");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Te", "Drinks", "5.90", "2");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coca cola", "Drinks", "9.90", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pasta", "Food", "17.50", "35");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jabon liquido", "Detergente", "56.70", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pescado", "Food", "88.90", "45");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Albondigas", "Food", "28.90", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lentes", "Accesorios", "150.90", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shorts","Ropa Dama", "30.90", "40");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chinos","Ropa Caballero" "99.90", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Falda", "Ropa Dama" "57.90", "3");
