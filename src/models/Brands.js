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

  static associate(models) {
    this.hasMany(models.Versions, { foreignKey: 'brand_id', as: 'versions' })
  }
}

module.exports = Brands