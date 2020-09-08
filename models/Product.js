const Sequelize = require('sequelize');
const db = require('../config/database');


const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    expiry_date: {
        type: Sequelize.DATE
    }
})

module.exports = Product;