import {checkOrderRepo, createOrderRepo, createOrderTableRepo} from "./orders.repo";
import _ from "lodash";

/**
 * createOrderService
 * @param data {Object}
 */
const createOrderService = async (data: object) => {
    console.log('CreateProductService');
    // @ts-ignore
    for (const values of data) {
        const {quantity, productId} = values
        const products = await checkOrderRepo(quantity, productId)
        if (_.isEmpty(products[0])) {
            throw Error('ProductId or Order Quantity is Wrong')
        }
        await createOrderRepo(quantity, productId)
        await createOrderTableRepo(quantity, productId)
    }
    return null

};


export {
    createOrderService
};
