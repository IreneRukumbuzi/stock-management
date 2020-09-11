import { Router } from 'express';
import passport from 'passport';
// const userController = require('../controllers/user');
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product";
import { validateProduct as productValidator } from "../middlewares/productValidator";
// const db = require('../config/database');
// const jwt = require('jsonwebtoken');

const router = Router();

// router.get('/', userController.landing);
// router.get('/login', userController.login);
// router.get('/logout', userController.logOut);
// router.get('/google', userController.google);
// router.get('/google/redirect', passport.authenticate('google'), userController.redirect);

router.get("/seller/stock", getProducts);
router.post("/seller/stock", productValidator , createProduct);
router.patch("/seller/stock/:id", productValidator, updateProduct);
router.delete("/seller/stock/:id", deleteProduct);
export default router;