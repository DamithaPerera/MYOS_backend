// @ts-nocheck
import {
    createProductsRepo,
    deleteProductsRepo,
    getAllProductsRepo, getAllWithoutSearchProductsRepo,
    updateProductsRepo,
    updateProductsWithPictureRepo
} from './products.repo';
import coolImages from 'cool-images';

/**
 * createProductService
 * @param data {Object}
 */
const createProductService = async (data: object) => {
    data.picture = coolImages.one();
    console.log('CreateProductService');
    return createProductsRepo(data)
};

/**
 * editProductService
 * @param data {Object}
 * @param productId {String}
 */
const editProductService = async (data: object, productId: string) => {
    console.log('editProductService');
    if (data.changePicture) {
        data.picture = coolImages.one();
        return updateProductsWithPictureRepo(data, productId)
    }
    return updateProductsRepo(data, productId)
};

/**
 * getAllProductService
 * @param offset {Number}
 * @param limit {Number}
 * @param byTitle {String}
 * @param byDescription {String}
 */
const getAllProductService = async (offset, limit, byTitle, byDescription) => {
    console.log('getAllProductService');
    if (limit === undefined) {
        limit = 10
    }
    if (offset === undefined) {
        offset = 0
    }
    return byTitle === undefined && byDescription === undefined ? getAllWithoutSearchProductsRepo(offset, limit) :
        getAllProductsRepo(offset, limit, byTitle, byDescription);

};

/**
 * deleteProductService
 * @param productId {String}
 */
const deleteProductService = async (productId: string) => {
    console.log('deleteProductService');
    return deleteProductsRepo(productId)
};

export {
    createProductService,
    editProductService,
    getAllProductService,
    deleteProductService
};
