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


export {
    createProductsRepo,
    updateProductsRepo,
    updateProductsWithPictureRepo
};
