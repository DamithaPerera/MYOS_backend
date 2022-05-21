// @ts-nocheck
import connection from '../../database/db';

/**
 * createProductsRepo
 * @param data {Object}
 */
const createProductsRepo = async (data: object) => {
    console.log('createProductsRepo', data)
    const query: string = `INSERT INTO products (title, description, picture, quantity) VALUES (?,?,?,?)`;
    return connection.promise().query(query, [data.title, data.description, data.picture, data.quantity])
};

/**
 * updateProductsRepo
 * @param data {Object}
 * @param id {String}
 */
const updateProductsRepo = async (data: object, id: string) => {
    console.log('updateProductsRepo', data)
    const values = [data.title, data.description, data.quantity, id];
    const query: string = `UPDATE products SET title = (?), description = (?), quantity = (?), 
                            updated_at = current_timestamp WHERE id = (?)`;
    return connection.promise().query(query, values)
};

/**
 * updateProductsWithPictureRepo
 * @param data {Object}
 * @param id {String}
 */
const updateProductsWithPictureRepo = async (data: object, id: string) => {
    console.log('updateProductsRepo', data)
    const values = [data.title, data.description, data.picture, data.quantity, id];
    const query: string = `UPDATE products SET title = (?), description = (?), picture = (?), quantity = (?),
                            updated_at = current_timestamp WHERE id = (?)`;
    return connection.promise().query(query, values)
};

/**
 * getAllProductsRepo
 * @param offset {Number}
 * @param limit {Number}
 * @param byTitle {String}
 * @param byDescription {String}
 */
const getAllProductsRepo = async (offset: number, limit: number, byTitle: string, byDescription: string) => {
    console.log('getAllProductsRepo')
    const query: string = `SELECT title, description, picture FROM products WHERE( title LIKE '%${byTitle}%' OR description LIKE '%${byDescription}%' ) 
                           AND deleted = false AND quantity > 0 LIMIT ${limit} OFFSET ${offset}`;
    return connection.promise().query(query)
};

/**
 * getAllWithoutSearchProductsRepo
 * @param offset {Number}
 * @param limit {Number}
 */
const getAllWithoutSearchProductsRepo = async (offset: number, limit: number) => {
    console.log('getAllWithoutSearchProductsRepo')
    const query: string = `SELECT title, description, picture FROM products WHERE deleted = false AND quantity > 0 LIMIT ${limit} OFFSET ${offset}`;
    return connection.promise().query(query)
};

/**
 * deleteProductsRepo
 * @param id {String}
 */
const deleteProductsRepo = async (id: string) => {
    console.log('deleteProductsRepo')
    const values = [true, id];
    const query: string = 'UPDATE products SET deleted = (?), updated_at = current_timestamp WHERE id = (?)';
    return connection.promise().query(query, values)
};

export {
    createProductsRepo,
    updateProductsRepo,
    updateProductsWithPictureRepo,
    getAllProductsRepo,
    deleteProductsRepo,
    getAllWithoutSearchProductsRepo
};
