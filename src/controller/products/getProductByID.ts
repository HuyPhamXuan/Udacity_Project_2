import express, { Request, Response } from "express";
import { Products } from "../../models/products";

const getProductByID = async (
    request: Request,
    response: Response,
    next: express.NextFunction
) => {
    try {
        const products = new Products();
        const dataByID = await products.show(request.params.id);
        return response.send(dataByID);
    } catch (err) {
        return response.status(400).send({errorMessage: `ERR: Could not find product ${request.params.id}.`})
    }
};

export default getProductByID;