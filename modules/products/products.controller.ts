import {Request, Response} from 'express';
import {
    createProductService,

} from './products.service'


const createProductsController = async (req: Request, res: Response): Promise<void> => {
    try {
        await createProductService(req.body)
        res.status(201).send({message: 'product created'});
    } catch (error) {
        console.log('createProductsController Error', error);
        res.status(400).send(error);
    }
};




export {
    createProductsController
}
