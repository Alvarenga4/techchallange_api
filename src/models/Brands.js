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
    this.hasMany(models.Models, { foreignKey: 'brand_id', as: 'models' })
    this.hasMany(models.Annoucements, { foreignKey: 'brand_id', as: 'annoucement' })
  }
}

module.exports = Brands