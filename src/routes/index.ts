import express, { Request, Response } from "express";
import getProducts from "../controller/products/getProducts";
import getProductByID from "../controller/products/getProductByID";
import createProduct from "../controller/products/createProduct";
import createUser from "../controller/users/signup";
import login from "../controller/users/login";
import authentication from "../authen/authentication";
import adminAuthentication from "../authen/adminAuthentication";
import getOrder from "../controller/orders/getOrder";
const routes = express.Router();

routes.get("/orders", authentication, getOrder);
routes.get("/products", getProducts);
routes.get("/products/:id", getProductByID);
routes.post("/products", adminAuthentication, createProduct);
routes.post("/user/signup", createUser);
routes.post("/user/login", login);


export default routes;
