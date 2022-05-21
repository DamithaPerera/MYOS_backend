import connection from '../database/db'

const createOrderTable = async () => {
    const orderTable = `CREATE TABLE IF NOT EXISTS
      orders(
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        CONSTRAINT FK_product_id FOREIGN KEY(product_id) REFERENCES products(id)
      )`;

    try {
        await connection.promise().query(orderTable);
    } catch (error) {
        console.log('createOrderTable error =>', error)
    }
};

export default createOrderTable;
