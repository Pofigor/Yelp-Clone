const { sequelize } = require('../../db/models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Attention!!! Database not connected:', error.message);
  }
};
