const express = require('express');
const { getShippingRates } = require('../controllers/shippingController');

const router = express.Router();

router.post('/rates', getShippingRates);

module.exports = router;
