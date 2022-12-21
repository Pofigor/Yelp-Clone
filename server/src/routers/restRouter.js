const express = require('express');

const router = express.Router();

const { getAllRest, getOneRest } = require('../controllers/restControllers');

router.get('/restaurants', getAllRest);
router.get('/restaurants/:id', getOneRest);

module.exports = router;
