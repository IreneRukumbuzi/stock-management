require('dotenv').config();

module.exports = {
  development: {
    database: 'stock-mgt',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'stock-mgt',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres',
  },
};