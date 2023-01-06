const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Restaurant }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.belongsTo(Restaurant, { foreignKey: 'id' });
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    restourant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING,
    away: DataTypes.BOOLEAN,
    deliwery: DataTypes.BOOLEAN,
    pay: DataTypes.BOOLEAN,
    isFavorite: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
