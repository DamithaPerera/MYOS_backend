import connection from '../../database/db';

/**
 * createOrderRepo
 * @param count {Number}
 * @param productId {Number}
 */
const createOrderRepo = async (count: number, productId: number) => {
    console.log('createOrderRepo')
    const query: string = `UPDATE products  SET quantity = GREATEST(0, quantity - ${count})  WHERE id = ${productId}`;
    return connection.promise().query(query)
};

/**
 * checkOrderRepo
 * @param quantity {Number}
 * @param productId {Number}
 */
const checkOrderRepo = async (quantity: number, productId: number) => {
    console.log('createOrderRepo')
    const query: string = `SELECT id, quantity FROM products WHERE id = ${productId} AND quantity > ${quantity}`;
    return connection.promise().query(query)
};

/**
 * createOrderTableRepo
 * @param quantity {Number}
 * @param productId {Number}
 */
const createOrderTableRepo = async (quantity: number, productId: number) => {
    console.log('createOrderTableRepo')
    const query: string = `INSERT INTO orders (product_id, quantity) VALUES (?,?)`;
    return connection.promise().query(query, [productId, quantity])
};

export {
    createOrderRepo,
    checkOrderRepo,
    createOrderTableRepo
}
