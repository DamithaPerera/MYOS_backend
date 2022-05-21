// @ts-nocheck
import {
    createProductsRepo,
    getAllProductsRepo,
    updateProductsRepo,
    updateProductsWithPictureRepo
} from './products.repo';
import coolImages from 'cool-images';


const createProductService = async (data: object) => {
    data.picture = coolImages.one();
    console.log('CreateProductService');
    return createProductsRepo(data)
};

const editProductService = async (data: object, productId: string) => {
    console.log('editProductService');
    if (data.changePitcure) {
        data.picture = coolImages.one();
        return updateProductsWithPictureRepo(data, productId)
    }
    return updateProductsRepo(data, productId)
};

const getAllProductService = async (offset, limit, byTitle, byDescription) => {
    console.log('getAllProductService');
    return getAllProductsRepo(offset, limit, byTitle, byDescription)
};


export {
    createProductService,
    editProductService,
    getAllProductService
};
