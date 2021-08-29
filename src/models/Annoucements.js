const { Model, DataTypes } = require('sequelize');

class Annoucements extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      km: DataTypes.INTEGER,
      sale_value: DataTypes.INTEGER,
      is_armored: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
      year_manufacture: DataTypes.INTEGER,
      year_model: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Simulation, {foreignKey: 'annoucement_id', as: 'simulations'});
    this.belongsTo(models.Color, { foreignKey: 'color_id', as: 'color' })
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.belongsTo(models.Brands, { foreignKey: 'brand_id', as: 'brand' })
    this.belongsTo(models.Models, { foreignKey: 'model_id', as: 'model' })
    this.belongsTo(models.Versions, { foreignKey: 'version_id', as: 'version' })
  }
}

module.exports = Annoucements;