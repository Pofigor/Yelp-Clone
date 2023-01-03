const { Rating } = require('../../db/models');

const addRating = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { restourant_id, newValue } = req.body;
    console.log('req.body=====>>>>>>', req.body);
    // eslint-disable-next-line camelcase
    await Rating.create({ restourant_id, rating: newValue });
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR CREATE NEW RATING VALUE', error);
  }
};

const getCurrentlRating = async (req, res) => {
  try {
    const currentRating = await Rating.findAll({ raw: true });
    // console.log('currentRating======>>>>>', currentRating);
    res.json({ currentRating });
  } catch (error) {
    console.log('Error to get rating', error);
  }
};

module.exports = { addRating, getCurrentlRating };
