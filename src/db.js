import knex from 'knex';
import config from '../knexfile.cjs';

const env = process.env.NODE_ENV === 'test' ? 'test' : 'development';
export default knex(config[env]);