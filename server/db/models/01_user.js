const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Favorite, Rating }) {
      this.belongsTo(Rating, { foreignKey: 'user_id' });
      this.belongsTo(Favorite, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
