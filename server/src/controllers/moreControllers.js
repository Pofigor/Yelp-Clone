const { Restaurant } = require('../../db/models');

// const getOneRest = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log('id===================', id);
//     const oneRest = await Restaurant.findOne({ where: { id }, raw: true });
//     console.log('oneRest=====>>>>', oneRest);
//     // renderTemplate(Home, { oneRest }, res);
//     res.json(oneRest);
//   } catch (error) {
//     console.log('ERROR FIND ITEM FROM Restaurant DB', error);
//   }
// };

const getAllRest = async (req, res) => {
  try {
    const allRest = await Restaurant.findAll({ raw: true });
    console.log('allRest=====>>>>', allRest);
    res.json({ allRest });
  } catch (error) {
    console.log('ERROR FIND ITEM FROM Restaurant DB', error);
  }
};

module.exports = { getAllRest };
