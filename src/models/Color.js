const { Model, DataTypes } = require('sequelize');

class Color extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Color