const express = require('express');
const { getTaxRate } = require('../controllers/taxController');

const router = express.Router();

router.get('/', getTaxRate);

module.exports = router;
