import {Request, Response} from 'express';

import {commonResponse} from '../../util/response'
import {createOrderService} from "./orders.service";

let response;
const createOrderController = async (req: Request, res: Response): Promise<void> => {

    try {
        await createOrderService(req.body.order)
        response = commonResponse(
            true,
            null,
            'order checked out',
            null
        );
        res.status(201).send(response);
    } catch (error) {
        console.log('createProductsController Error',  error);
        response = commonResponse(
            false,
            null,
            'order checked out failed',
            error
        );
        res.status(400).send(response);
    }
};


export {
    createOrderController
}
