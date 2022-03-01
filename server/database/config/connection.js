require('env2')('.env');
const { Pool } = require('pg');

const { DB_URL } = process.env;
if (!DB_URL) {
  throw new Error({ message: 'Error when connect DataBase' });
}
const connection = new Pool({
  connectionString: DB_URL,
  ssl: false,
});

module.exports = connection;
