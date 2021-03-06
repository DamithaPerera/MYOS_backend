import {Request, Response} from 'express';
import {
    createProductService,
    deleteProductService,
    editProductService,
    getAllProductService,
} from './products.service'
import {commonResponse} from '../../util/response'

/**
 * createProductsController
 * @param req
 * @param res
 */
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
            false,
            null,
            'product creation failed',
            error
        );
        res.status(400).send(response);
    }
};


/**
 * editProductsController
 * @param req
 * @param res
 */
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
        res.status(200).send(response);
    } catch (error) {
        console.log('editProductsController Error', error);
        response = commonResponse(
            false,
            null,
            'product update failed',
            error
        );
        res.status(400).send(response);
    }
};

/**
 * getAllProductsController
 * @param req
 * @param res
 */
const getAllProductsController = async (req: Request, res: Response): Promise<void> => {

    try {
        const {offset, limit, byTitle, byDescription} = req.query;
        const data = await getAllProductService(offset, limit, byTitle, byDescription)
        response = commonResponse(
            true,
            data[0],
            'get all products',
            null
        );
        res.status(200).send(response);
    } catch (error) {
        console.log('getAllProductsController Error', error);
        response = commonResponse(
            false,
            null,
            'get all products failed',
            error
        );
        res.status(400).send(response);
    }
};


/**
 * deleteProductsController
 * @param req
 * @param res
 */
const deleteProductsController = async (req: Request, res: Response): Promise<void> => {

    try {
        const productId = req.params.productId;
        await deleteProductService(productId)
        response = commonResponse(
            true,
            null,
            'product deleted successfully',
            null
        );
        res.status(200).send(response);
    } catch (error) {
        console.log('getAllProductsController Error', error);
        response = commonResponse(
            false,
            null,
            'product delete failed',
            error
        );
        res.status(400).send(response);
    }
};

export {
    createProductsController,
    editProductsController,
    getAllProductsController,
    deleteProductsController
}
