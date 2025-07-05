// knexfile.cjs
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: path.resolve(__dirname, 'dev.sqlite3') },
    useNullAsDefault: true,
    migrations: { directory: path.resolve(__dirname, 'migrations') }
  },
  test: {
    client: 'sqlite3',
    connection: { filename: ':memory:' },
    useNullAsDefault: true,
    migrations: { directory: path.resolve(__dirname, 'migrations') }
  }
};