import connection from '../database/db'

const createProductTable = async () => {
    const productTable = `CREATE TABLE IF NOT EXISTS
       products(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(256) NOT NULL,
        description VARCHAR(256) NOT NULL,
        picture VARCHAR(256) NOT NULL,
        quantity INT NOT NULL,
        deleted BOOLEAN NOT NULL DEFAULT false,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP()
    )`;


    try {
        await connection.promise().query(productTable);
    } catch (error) {
        console.log('createProductTable error =>', error)
    }
};

export default createProductTable;
