CREATE TABLE orders(
id INT NOT NULL,
  order_number INT,
  customer_id int,
  products_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (products_id) REFERENCES products(id)
 )