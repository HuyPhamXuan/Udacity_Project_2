import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { User, Users } from "../../models/users";
import { signupValidateParams } from "../../helpers/validations/signupValdateParams";

const createUser = async (
    request: Request,
    response: Response,
    next: express.NextFunction
) => {
    let params: User;
    try {
        params = await signupValidateParams.validateAsync(request.body, {
            abortEarly: false,
        });
    }catch(err: any){
        const errorMessage: { message: any; }[] = [];
        err?.details?.forEach((detail: any) => {
            const message = {
                message: detail.message
            } 
            errorMessage.push(message);
        });
        return response.status(400).send({errorMessage: errorMessage});
    }

    try {
        const user = new Users();
        const bcrptPassword = process.env.BCRYPT_PASSWORD;
        const saltRound: number = process.env.SALT_ROUND
            ? parseInt(process.env.SALT_ROUND)
            : 0;
        const hash = bcrypt.hashSync(params.password + bcrptPassword, saltRound);

        const newUser: User = {
            user_name: params.user_name,
            first_name: params.first_name,
            last_name: params.last_name,
            password: hash,
            user_role: "user",
        };
        const data = await user.create(newUser);
        return response.send(data);
    } catch (err) {
        return response.status(400).send("ERR: Can't create new user");
    }
};

export default createUser;
