const Sequelize = require('sequelize');
const keys = require('./keys');

module.exports = new Sequelize(keys.db.name, keys.db.userName, keys.db.password, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000,
    }
});