const express = require('express');
const passport = require('passport');
// const userController = require('../controllers/user');
const productController = require("../controllers/product");
const productValidator = require("../middlewares/productValidator").validateProduct;
// const db = require('../config/database');
// const jwt = require('jsonwebtoken');

const router = express.Router();

// router.get('/', userController.landing);
// router.get('/login', userController.login);
// router.get('/logout', userController.logOut);
// router.get('/google', userController.google);
// router.get('/google/redirect', passport.authenticate('google'), userController.redirect);

router.get("/seller/stock", productController.getProducts);
router.post("/seller/stock", productValidator , productController.createProduct);
router.patch("/seller/stock/:id", productValidator, productController.updateProduct);
router.delete("/seller/stock/:id", productController.deleteProduct);
module.exports = router;