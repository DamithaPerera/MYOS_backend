import {Router} from 'express';
import {
    createProductsController,
    deleteProductsController,
    editProductsController,
    getAllProductsController
} from './products.controller';


const routes = Router();


routes.post('/', createProductsController);
routes.put('/:productId', editProductsController);
routes.get('/', getAllProductsController);
routes.delete('/:productId', deleteProductsController);


export default routes;
