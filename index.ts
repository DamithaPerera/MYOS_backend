import express, {Express} from 'express';
import cookieParser from 'cookie-parser';
import connection from './database/db'
import createTables from './models/createTables';
import productsRoutes from './modules/products/products.router'
import ordersRoutes from './modules/orders/orders.router'
import cors from 'cors';

const app: Express = express();
const port = 3001;
connection.promise()

createTables()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use('/v1/products', productsRoutes)
app.use('/v1/orders', ordersRoutes)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
