const express = require('express');
const userController = require('../controllers/user');
const db = require('../config/database');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', userController.landing);
router.get('/seller/stock', (req, res) => {
    Product.findAll()
        .then(product => {
            console.log(product);
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
});
router.get('/login', userController.login);
router.get('/logout', userController.logOut);
router.get('/google', userController.google);

module.exports = router;