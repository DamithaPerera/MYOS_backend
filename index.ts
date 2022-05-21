import express, {Express} from 'express';
import cookieParser from 'cookie-parser';
import connection from './database/db'
import createTables from './models/createTables';


const app: Express = express();
const port = 3001;
connection.promise()

createTables()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
