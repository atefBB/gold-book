const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pg2022",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

module.exports = pool;
