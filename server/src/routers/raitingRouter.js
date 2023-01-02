const express = require('express');

const router = express.Router();

const { addRating } = require('../controllers/raitingControllers');

router.post('/rating', addRating);

module.exports = router;
