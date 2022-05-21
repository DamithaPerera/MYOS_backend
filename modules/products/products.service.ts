// @ts-nocheck
import {createProductsRepo} from './products.repo';
import coolImages from 'cool-images';


const createProductService = async (data: object) => {
    data.picture = coolImages.one();
    console.log('CreateProductService');
    return await createProductsRepo(data)
};


export {
    createProductService
};
