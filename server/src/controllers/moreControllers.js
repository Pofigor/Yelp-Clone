const { Restaurant } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const getOneRest = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id===================', id);
    const oneRest = await Restaurant.findOne({ where: { id }, raw: true });
    console.log('oneRest=====>>>>', oneRest);
    renderTemplate(Home, { oneRest }, res);
    res.json(oneRest);
  } catch (error) {
    console.log('ERROR FIND ITEM FROM Restaurant DB', error);
  }
};

module.exports = { getOneRest };
