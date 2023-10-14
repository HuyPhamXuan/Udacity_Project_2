import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { User, Users } from "../../models/users";
import { loginValidateParams } from "../../helpers/validations/loginValidateParams";

const login = async (
    request: Request,
    response: Response,
    next: express.NextFunction
) => {
    let params: User;
    try {
        params = await loginValidateParams.validateAsync(request.body, {
            abortEarly: false,
        });
    }catch(err: any){
        const errorMessage: { mess: any; }[] = [];
        err?.details?.forEach((detail: any) => {
            const mess = {
                mess: detail.message
            } 
            errorMessage.push(mess);
        });
        return response.status(400).send({errorMessage: errorMessage});
    }

    try {
        const user = new Users();
        const bcrptPassword = process.env.BCRYPT_PASSWORD;
        const data = await user.index(params.user_name);
        const isMatchCheck = bcrypt.compareSync(
            params.password + bcrptPassword,
            data.password
        );
        const secret = process.env.TOKEN_SECRET || "";
        if(!isMatchCheck){
            throw new Error('ERR: Incorrect password or user name');
        }
        const token = jwt.sign({role: data.user_role, id: data.id }, secret);
        return response.status(200).send({token: token});
    } catch (err) {
        return response.status(400).send('ERR: Incorrect password or user name');
    }
};

export default login;
