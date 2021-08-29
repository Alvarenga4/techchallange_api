const { Model, DataTypes } = require('sequelize');

class VehicleOptions extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
  }
}

module.exports = VehicleOptions;