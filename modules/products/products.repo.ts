// @ts-nocheck
import connection from '../../database/db';


const createProductsRepo = async (data: object) => {
    console.log('createProductsRepo', data)
    const query: string = `INSERT INTO products (title, description, picture, quantity) VALUES (?,?,?,?)`;
    return connection.promise().query(query, [data.title, data.description, data.picture, data.quantity])
};


const updateProductsRepo = async (data: object, id: string) => {
    console.log('updateProductsRepo', data)
    const values = [data.title, data.description, data.quantity, id];
    const query: string = `UPDATE products SET title = (?), description = (?), quantity = (?), 
                            updated_at = current_timestamp WHERE id = (?)`;
    return connection.promise().query(query, values)
};

const updateProductsWithPictureRepo = async (data: object, id: string) => {
    console.log('updateProductsRepo', data)
    const values = [data.title, data.description, data.picture, data.quantity, id];
    const query: string = `UPDATE products SET title = (?), description = (?), picture = (?), quantity = (?),
                            updated_at = current_timestamp WHERE id = (?)`;
    return connection.promise().query(query, values)
};

const getAllProductsRepo = async (offset: number, limit: number, byTitle: string, byDescription: string) => {
    console.log('createTaskRepo')
    const query: string = `SELECT title, description, picture FROM products WHERE( title LIKE '%${byTitle}%' OR description LIKE '%${byDescription}%' ) 
                           AND deleted = false LIMIT ${limit} OFFSET ${offset}`;
    const data = await connection.promise().query(query)
    return data[0]
};

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
    deleteProductsRepo
};
