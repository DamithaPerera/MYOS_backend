import {Request, Response} from 'express';
import {
    createProductService,

} from './products.service'
import {commonResponse} from '../../util/response'

let response;
const createProductsController = async (req: Request, res: Response): Promise<void> => {

    try {
        await createProductService(req.body)
        response = commonResponse(
            true,
            null,
            'product created',
            null
        );
        res.status(201).send(response);
    } catch (error) {
        console.log('createProductsController Error', error);
        response = commonResponse(
            true,
            null,
            'product creation failed',
            error
        );
        res.status(400).send(response);
    }
};


export {
    createProductsController
}
