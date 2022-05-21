import {Router} from 'express';
import {
    createProductsController,
    deleteProductsController,
    editProductsController,
    getAllProductsController
} from './products.controller';
import {
    createProductsValidation,
    getAllProductsValidation,
    updateProductsValidation
} from "./products.validation";


const routes = Router();


routes.post('/', createProductsValidation, createProductsController);
routes.put('/:productId', updateProductsValidation, editProductsController);
routes.get('/', getAllProductsValidation, getAllProductsController);
routes.delete('/:productId', deleteProductsController);


export default routes;
