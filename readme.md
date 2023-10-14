
# DESCRIPTION PROJECT

This is a application for managing an online storefront. This application provides users with APis that can perform functions such as: orders, products, and users.

# USAGE

- First, you need to install the following necessary things: Docker, NodeJS.

# SETUP STEPS TO BE ABLE TO RUN SOURCE

1. Install NPM:
- npm install

2. Install Jasmine and db-migrate:
- npm i -g jasmine 
- npm i -g db-migrate

3. Run start the PostgreSQL database with commands:
- docker-compose up


4. Run the migrations and create the database tables with commands:
- db-migrate up

5. Run start the app:
- npm run start

After performing the above steps, the application will run at: http://localhost:3001.

# USAGE API
- Method: POST, api/user/signup: Sign up a new user account
- Method: POST api/user/login: Log in with a user account
- Method: GET api/orders: Get a list orders
- Method: GET api/products: Get a list products
- Method: GET api/products?category=?: Get a list products by category
- Method: GET api/products/:id: Get detail product information by ID
- Method: POST api/products: Create a new product


# Account
Here, 2 accounts have been created:
- User:
    - user_name: user
    - password: password123
- Admin:
    - user_name: Admin
    - password: password123
