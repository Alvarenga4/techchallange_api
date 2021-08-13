const { Model, DataTypes } = require('sequelize');

class Brands extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }
}

module.exports = Brands