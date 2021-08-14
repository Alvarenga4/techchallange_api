const { Model, DataTypes } = require('sequelize');

class Models extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }
  
  static associate(models) {
    this.belongsTo(models.Brands, { foreignKey: 'brand_id', as: 'brand' })
    this.hasMany(models.Versions, { foreignKey: 'model_id', as: 'version' })
  }
}

module.exports = Models