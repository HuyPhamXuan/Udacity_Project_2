/* Replace with your SQL commands */
CREATE TABLE orders_products (order_id bigint REFERENCES orders(id), product_id bigint REFERENCES products(id), quantity INTEGER, id SERIAL PRIMARY KEY);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (1, 1, 1);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (1, 2, 1);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (1, 3, 1);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (2, 4, 1);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (2, 4, 1);
INSERT INTO orders_products (order_id, product_id, quantity) VALUES (2, 5, 1);