import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'myos_backend',
});
console.log('⚡ DB connected')


export default connection;

