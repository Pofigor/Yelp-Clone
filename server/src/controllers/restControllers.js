const { Restaurant } = require('../../db/models');

const getAllRest = async (req, res) => {
  // console.log('req.session from restController===>>>>', req.session);
  try {
    const allRest = await Restaurant.findAll({ raw: true });
    res.json({ allRest });
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
