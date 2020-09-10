const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user');
const productController = require("../controllers").product;
// const db = require('../config/database');
// const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', userController.landing);
// router.get('/login', userController.login);
router.get('/logout', userController.logOut);
router.get('/google', userController.google);
router.get('/google/redirect', passport.authenticate('google'), userController.redirect);

router.get("/seller/stock", productController.getProducts);
router.post("/seller/stock", productController.createProduct);
router.patch("/seller/stock/:id", productController.updateProduct);
router.delete("/seller/stock/:id", productController.deleteProduct);
module.exports = router;