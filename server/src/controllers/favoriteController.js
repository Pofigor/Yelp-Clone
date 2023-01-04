const { Favorite } = require('../../db/models');

const addToFavorite = async (req, res) => {
  try {
    const { userId } = req.session;
    const { restourant_id } = req.body;
    await Favorite.create({ user_id: userId, restourant_id });
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR ADDED CART TO FAVORITE', error);
  }
};

module.exports = { addToFavorite };
