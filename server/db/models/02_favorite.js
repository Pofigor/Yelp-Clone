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
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
