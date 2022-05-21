import Joi from "joi";
import {NextFunction, Request, Response} from 'express';
import {commonResponse} from "../../util/response";

/**
 * createOrderValidation validation
 * @param req
 * @param res
 * @param next
 */
let response;
export const createOrderValidation = (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        order: Joi.array()
            .items({
                quantity: Joi.number().integer().min(1)
                    .required(),
                productId: Joi.number().integer().min(1)
                    .required()
            })
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        response = commonResponse(
            false,
            null,
            result.error.message,
            result.error
        );
        res.status(422).send(response);
    } else {
        next()
    }
};
