// @ts-nocheck
import connection from '../../database/db';


const createProductsRepo = async (data: object) => {
    console.log('createProductsRepo', data)
    const query: string = `INSERT INTO products (title, description, picture, quantity) VALUES (?,?,?,?)`;
    return connection.promise().query(query, [data.title, data.description, data.picture, data.quantity])
};


export {
    createProductsRepo
};
