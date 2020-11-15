import Knex from 'knex';
import knexConfig from '../../knexfile.js';

// Returns a Knex DB connection with config based on NODE_ENV
export default Knex(knexConfig[process.env.NODE_ENV || 'development']);