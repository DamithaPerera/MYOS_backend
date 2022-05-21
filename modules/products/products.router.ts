import {Router} from 'express';
import {createProductsController} from './products.controller';


const routes = Router();


routes.post('/',   createProductsController);


export default routes;
