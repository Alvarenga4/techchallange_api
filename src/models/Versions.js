const { Model, DataTypes } = require('sequelize');

class Versions extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }
  
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'brand_id', as: 'brand' })
  }
}

module.exports = Versions