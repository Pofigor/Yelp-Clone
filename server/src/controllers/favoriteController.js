const { Favorite } = require('../../db/models');

const addToFavorite = async (req, res) => {
  try {
    const { userId } = req.session;
    const {
      restourant_id, name, desc, img, away, deliwery, pay,
    } = req.body;
    await Favorite.create({
      user_id: userId, restourant_id, name, desc, img, away, deliwery, pay,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR ADDED CART TO FAVORITE', error);
  }
};

const deleteFavorite = async (req, res) => {
  const { restourant_id } = req.body;
  try {
    await Favorite.destroy({ where: { restourant_id } });
  } catch (error) {
    console.log('ERROR DELETE CART FROM FAVORITE', error);
  }
};

const getAllFavorite = async (req, res) => {
  try {
    const allFavorite = await Favorite.findAll({ raw: true });
    console.log('allFavorite=====', allFavorite);
    res.json({ allFavorite });
  } catch (error) {
    console.log('ERROR FIND ALL ITEMS FROM Favorite DB', error);
  }
};

// const getOneFavorite = async (req, res) => {
//   const { restourant_id } = req.body;
//   try {
//     const oneFaforite = await Favorite.findOne({ where: {restourant_id} });
//   } catch (error) {
//     console.log('ERROR FIND ONE ITEM FROM Favorite DB', error);
//   }
// };

module.exports = { addToFavorite, deleteFavorite, getAllFavorite };
