import {Request, Response} from 'express';
import {
    createProductService, editProductService,

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

const editProductsController = async (req: Request, res: Response): Promise<void> => {

    try {
        const productId = req.params.productId;
        await editProductService(req.body, productId)
        response = commonResponse(
            true,
            null,
            'product updated',
            null
        );
        res.status(201).send(response);
    } catch (error) {
        console.log('editProductsController Error', error);
        response = commonResponse(
            true,
            null,
            'product update failed',
            error
        );
        res.status(400).send(response);
    }
};

export {
    createProductsController,
    editProductsController
}
