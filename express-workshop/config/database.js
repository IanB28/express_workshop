const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokemon',
});

module.exports = pool; 

pool.query = util.promisify(pool.query);
module.exports = pool;
