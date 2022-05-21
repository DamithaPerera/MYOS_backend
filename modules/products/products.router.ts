import {Router} from 'express';
import {createProductsController, editProductsController} from './products.controller';


const routes = Router();


routes.post('/', createProductsController);
routes.put('/:productId', editProductsController);


export default routes;
