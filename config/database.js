const Sequelize = require('sequelize');
module.exports = new Sequelize('stock-mgt', 'postgres', 'Umutekano', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000,
    }
});