import Joi from "joi";
import {NextFunction, Request, Response} from 'express';
import {commonResponse} from "../../util/response";

/**
 * createProductsValidation validation
 * @param req
 * @param res
 * @param next
 */
let response;
export const createProductsValidation = (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().required(),
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


/**
 * updateProductsValidation validation
 * @param req
 * @param res
 * @param next
 */
export const updateProductsValidation = (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().required(),
        changePicture: Joi.boolean().required(),
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


/**
 * getAllProductsValidation validation
 * @param req
 * @param res
 * @param next
 */
export const getAllProductsValidation = (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        offset: Joi.number().required(),
        limit: Joi.number().required(),
        byTitle: Joi.string().optional(),
        byDescription: Joi.string().optional(),
    });

    const result = schema.validate(req.query);
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
