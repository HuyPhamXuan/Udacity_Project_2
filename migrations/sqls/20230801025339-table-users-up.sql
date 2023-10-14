/* Replace with your SQL commands */
CREATE TABLE users (user_name VARCHAR(50) UNIQUE, first_name VARCHAR(50), last_name VARCHAR(50), user_role VARCHAR(50), password VARCHAR(255), id SERIAL PRIMARY KEY);
INSERT INTO users (user_name, first_name, last_name, user_role, password) VALUES ('Admin', 'John', 'Wick', 'admin', '$2b$10$L1o3f5sqRfZqUYxvjRbmW.SD7YnQv/SJQta/6HGYBUrFzmUPRXs6y');
INSERT INTO users (user_name, first_name, last_name, user_role, password) VALUES ('user', 'John', 'Snow', 'user', '$2b$10$L1o3f5sqRfZqUYxvjRbmW.SD7YnQv/SJQta/6HGYBUrFzmUPRXs6y');