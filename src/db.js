import knex from 'knex';
import config from '../knexfile.js';

const env = process.env.NODE_ENV === 'test' ? 'test' : 'development';
export default knex(config[env]);