const express = require('express');

const router = express.Router();

const { addToFavorite, deleteFavorite, getAllFavorite } = require('../controllers/favoriteController');

router.post('/favorite', addToFavorite);
router.delete('/delete', deleteFavorite);
router.get('/favorite', getAllFavorite);

module.exports = router;
