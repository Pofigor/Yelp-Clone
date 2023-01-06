const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate({ Rating, Favorite }) {
      this.hasMany(Rating, { foreignKey: 'restourant_id' });
      this.hasMany(Favorite, { foreignKey: 'restourant_id' });
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING,
    away: DataTypes.BOOLEAN,
    deliwery: DataTypes.BOOLEAN,
    pay: DataTypes.BOOLEAN,
    isFavorite: DataTypes.BOOLEAN,
    // user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};
