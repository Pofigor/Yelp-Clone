const express = require('express');

const router = express.Router();

const { addToFavorite } = require('../controllers/favoriteController');

router.post('/favorite', addToFavorite);

module.exports = router;
