const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'cobra@x04gt',
    database: 'todo_list'
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;