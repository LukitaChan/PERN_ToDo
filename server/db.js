const { Pool } = require('pg/lib');

const pool = new Pool({
	user: 'postgres',
	password: 'galleta12',
	host: 'localhost',
	port: 5000,
	database: 'perntodo'
});

module.exports = pool;
