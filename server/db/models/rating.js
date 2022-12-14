const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ Restaurant, User }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.belongsTo(Restaurant, { foreignKey: 'id' });
    }
  }
  Rating.init({
    user_id: DataTypes.INTEGER,
    restourant_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
