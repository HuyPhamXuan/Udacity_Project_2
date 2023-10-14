import express from 'express';
import jwt, { Secret, JwtPayload } from "jsonwebtoken";

const authentication = async (
    req: express.Request,
    res: express.Response,
    next: Function
) => {
    try {
        console.log('runing')
        const accessToken = req.headers.authorization || ''
        const token = accessToken && accessToken.split('Bearer ')[1];
        const secret = process.env.TOKEN_SECRET || ''
        const data = jwt.verify(token, secret)
        next();
    } catch (err: any) {
        return res
            .status(401)
            .send({errorMessage: 'ERR: Unauthorized'});
    }
};

export default authentication;
