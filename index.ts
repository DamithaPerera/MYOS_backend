import express, {Express} from 'express';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
