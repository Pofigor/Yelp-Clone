const express = require('express');

const router = express.Router();

const {
  addToFavorite, deleteFavorite, getAllFavorite, getAllFavoriteUser,
} = require('../controllers/favoriteController');

router.post('/favorite', addToFavorite);
router.delete('/delete', deleteFavorite);
router.get('/favorite', getAllFavorite);
router.get('/favorite/user-id', getAllFavoriteUser);

module.exports = router;
