import express, { Request, Response } from "express";
import { Orders } from "../../models/orders";
import jwt from "jsonwebtoken";

const getOrder = async (
    req: Request,
    res: Response,
) => {
    try {
        const cusOrders = new Orders();
        const accessToken = req.headers.authorization || "";
        const token = accessToken && accessToken.split("Bearer ")[1];
        const secret = process.env.TOKEN_SECRET || "";
        const payload: any = jwt.verify(token, secret);
        const datas = await cusOrders.index(payload?.id);
        return res.send(datas);
    } catch (err) {
        return res
            .status(400)
            .send({ errorMessage: `ERR: Could not find order` });
    }
};

export default getOrder;