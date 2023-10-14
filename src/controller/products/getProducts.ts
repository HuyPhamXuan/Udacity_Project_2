import express, { Request, Response } from "express";
import { Products } from "../../models/products";

const getProducts = async (
    request: Request,
    response: Response,
    next: express.NextFunction
) => {
    const products = new Products();
    if(request.query.category){
        const dataProduct = await products.showByCategory(request.query.category.toString());
        dataProduct.map(item => console.log(item.category))
        return response.send(dataProduct);
    }
    
    const dataProduct = await products.index();
    return response.send(dataProduct);
};

export default getProducts;
