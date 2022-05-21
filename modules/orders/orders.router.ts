import {Router} from 'express';

import {createOrderController} from "./orders.controller";


const routes = Router();


routes.post('/', createOrderController);


export default routes;
