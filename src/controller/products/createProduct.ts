import express, { Request, Response } from "express";
import { Product, Products } from "../../models/products";
import { productValidateParams } from "../../helpers/validations/productBodyValidateParams";

const createProduct = async (
    request: Request,
    response: Response,
    next: express.NextFunction
) => {
    let params: Product;
    try {
        params = await productValidateParams.validateAsync(request.body, {
            abortEarly: false,
        });
    } catch (err: any) {
        const errorMessage: { message: any }[] = [];
        err?.details?.forEach((detail: any) => {
            const message = {
                message: detail.message,
            };
            errorMessage.push(message);
        });
        return response.status(400).send({ errorMessage: errorMessage });
    }
    try {
        const newProduct: Product = {
            name: params.name,
            price: params.price,
        };

        const product = new Products();
        // create item product
        product.create(newProduct);
        return response.send({ message: "success" });
    } catch (err) {
        return response.status(400).send("ERR: Can't create new user");
    }
};

export default createProduct;
