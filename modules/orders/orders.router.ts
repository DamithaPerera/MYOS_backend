import {Router} from 'express';

import {createOrderController} from "./orders.controller";
import {taskBody} from "./orders.validation";


const routes = Router();


routes.post('/', taskBody, createOrderController);


export default routes;
