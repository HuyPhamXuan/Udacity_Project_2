/* Replace with your SQL commands */
CREATE TABLE orders (user_id bigint REFERENCES users(id),  order_status VARCHAR(50), id SERIAL PRIMARY KEY);
INSERT INTO orders (user_id, order_status) VALUES (2, 'complete');
INSERT INTO orders (user_id, order_status) VALUES (2, 'active');