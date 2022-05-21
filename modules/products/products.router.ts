import {Router} from 'express';
import {createProductsController, editProductsController, getAllProductsController} from './products.controller';


const routes = Router();


routes.post('/', createProductsController);
routes.put('/:productId', editProductsController);
routes.get('/', getAllProductsController);


export default routes;
