import express from 'express';
import jwt from "jsonwebtoken";

const adminAuthentication = async (
    req: express.Request,
    res: express.Response,
    next: Function
) => {
    try {
        const accessToken = req.headers.authorization || ''
        const token = accessToken && accessToken.split('Bearer ')[1];
        const secret = process.env.TOKEN_SECRET || ''
        const datas: any = jwt.verify(token, secret)
        if(datas.role !== 'admin'){
            return res
            .status(401)
            .send({errorMessage: 'ERR: This token is denied'});
        }
        next();
    } catch (err: any) {
        return res
            .status(401)
            .send({errorMessage: 'ERR: Unauthorized'});
    }
};

export default adminAuthentication;
