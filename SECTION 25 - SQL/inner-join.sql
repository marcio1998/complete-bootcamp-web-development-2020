SELECT orders.order_number, customers.first_name, customers.last_name, customers.addres
FROM orders
INNER JOIN customers on orders.customer_id = customers.id