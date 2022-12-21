const express = require('express');

const router = express.Router();

const { getAllRest } = require('../controllers/restControllers');

router.get('/restaurants', getAllRest);

module.exports = router;
