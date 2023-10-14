# REQUIMENTS
The company wants to create an online store to showcase their amazing product ideas. Users should be able to browse the catalog of all products, view specific details of a product, and add products to a shopping cart that they can view on the cart page. You have been tasked with building the API to support this application, while your colleague is working on the user interface

# DATABASE
This is a basic description of the Database:
1. Table for products include:
- id: SERIAL (primary key)
- name: VARCHAR
- price: DECIMAL

2. Table for users include:
- id: SERIAL (primary key)
- user_name: VARCHAR
- firstName: VARCHAR
- lastName: VARCHAR
- password: VARCHAR
- user_role: VARCHAR

3. Table for orders include:
- id: SERIAL (primary key)
- user_id: INTEGER (foreign key reference users.id)
- order_status: VARCHAR

4.  Table for products_categories include:
- id: SERIAL (primary key)
- category_id: INTEGER (foreign key reference categories.id)
- product_id: INTEGER (foreign key reference products.id)
- quantity: INTEGER

5. Table for orders_products include:
- id: SERIAL (primary key)
- order_id: INTEGER (foreign key reference orders.id)
- product_id: INTEGER (foreign key reference products.id)
- quantity: INTEGER

6. Table for categories include:
- id: SERIAL (primary key)
- name: VARCHAR
- description: VARCHAR

# API ENDPOINTS
This is a basic description of the endpoint:
1. With products
- Index 
- Create (arg: Product)[token required]
- Show (arg: product id)
- [OPTIONAL] Products by category

2. With users
- Index [token required]
- Create (arg: User)[token required]
- Show (arg: id)[token required]

3. With orders
- Current Order by user
- [OPTIONAL] Complete order by user (arg: user_id)[token required]