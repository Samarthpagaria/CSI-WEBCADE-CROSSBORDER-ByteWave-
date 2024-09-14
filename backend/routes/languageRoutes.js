const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.get('/some-route', languageController.someFunction);

module.exports = router;
