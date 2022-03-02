require('env2')('.env');
const { Pool } = require('pg');

let URL_DATABASE = '';

if (process.env.NODE_ENV === 'test') {
  URL_DATABASE = process.env.DB_URL_TEST;
} else {
  URL_DATABASE = process.env.DB_URL;
}

if (!URL_DATABASE) {
  throw new Error({ message: 'Error when connect DataBase' });
}
const connection = new Pool({
  connectionString: URL_DATABASE,
  ssl: false,
});

module.exports = connection;
