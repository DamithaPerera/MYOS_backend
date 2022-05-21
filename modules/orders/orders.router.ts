import {Router} from 'express';

import {createOrderController} from "./orders.controller";
import {createOrderValidation} from "./orders.validation";


const routes = Router();


routes.post('/', createOrderValidation, createOrderController);


export default routes;
