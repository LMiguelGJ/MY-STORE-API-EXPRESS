const {Pool} = require('pg');
const {config} = require('./../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  const pool = new Pool({connectionString: URL})

module.exports = pool;
