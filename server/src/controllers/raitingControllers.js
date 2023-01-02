const { Rating } = require('../../db/models');

const addRating = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { restourant_id, value } = req.body;
    console.log('req.body=====>>>>>>', req.body);
    // const { userEmail } = req.session.userEmail;
    // if (userEmail === )
    // eslint-disable-next-line camelcase
    await Rating.create({ restourant_id, rating: value });
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR CREATE NEW RATING VALUE', error);
  }
};

module.exports = { addRating };
