/* Replace with your SQL commands */
CREATE TABLE products_categories (category_id bigint REFERENCES categories(id), product_id bigint REFERENCES products(id), quantity INTEGER, status VARCHAR(50), id SERIAL PRIMARY KEY);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (1, 1, 100);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (1, 2, 100);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (1, 3, 100);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (2, 4, 100);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (2, 5, 100);