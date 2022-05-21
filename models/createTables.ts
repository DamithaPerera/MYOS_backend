import createProductTable from './products';
import createOrderTable from './orders';


const createTables = async () => {
    try {
        await createProductTable();
        await createOrderTable();
    } catch (error) {
        console.log('createTables error =>', error)
    }
};

export default createTables;
