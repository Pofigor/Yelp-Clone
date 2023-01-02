const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ Restaurant }) {
      this.belongsTo(Restaurant, { foreignKey: 'id' });
    }
  }
  Rating.init({
    restourant_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
