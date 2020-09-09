const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user');
const db = require('../config/database');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', userController.landing);
router.get('/seller/stock', userController.getProducts);
// router.get('/login', userController.login);
router.get('/logout', userController.logOut);
router.get('/google', userController.google);
router.get('/google/redirect', passport.authenticate('google'), userController.redirect);

// router.post('/login', (req, res) => {
//     jwt.sign({ user: user }, 'secretkey', (err, token) => {
//         res.json({
//             token: token
//         })
//     })
// })

module.exports = router;