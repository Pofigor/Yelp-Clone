const { Restaurant } = require('../../db/models');

const getAllRest = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const user_id = req.session.userId;
    const allRest = await Restaurant.findAll({ raw: true });
    console.log('allRest==============', allRest);
    // eslint-disable-next-line camelcase
    res.json({ allRest, user_id });
  } catch (error) {
    console.log('ERROR FIND ITEM FROM Restaurant DB', error);
  }
};

const getOneRest = async (req, res) => {
  try {
    const { id } = req.params;
    const oneRest = await Restaurant.findOne({ where: { id }, raw: true });
    res.json({ oneRest });
  } catch (error) {
    console.log('ERROR FIND ITEM FROM Restaurant DB', error);
  }
};

module.exports = { getAllRest, getOneRest };
