import Joi from "joi";
import { Product } from "../../models/products"; 

export const productValidateParams = Joi.object<Product>({
    name: Joi.string().required().max(255),
    price: Joi.number().required(),
})

