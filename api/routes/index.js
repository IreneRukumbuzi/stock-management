const express = require('express');
const prController = require('../controllers/product');

const router = express.Router();


router.get('/seller/stock/', prController.getProducts);
router.get('/seller/stock/:id', prController.getOneProduct);


module.exports = router;