import Joi from "joi";
import { User } from "../../models/users"; 

export const loginValidateParams = Joi.object<User>({
    user_name: Joi.string().required().max(255),
    password: Joi.string().required(),
})

