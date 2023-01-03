const express = require('express');

const router = express.Router();

const { addRating, getCurrentlRating } = require('../controllers/raitingControllers');

router.post('/rating', addRating);
router.get('/rating', getCurrentlRating);

module.exports = router;
