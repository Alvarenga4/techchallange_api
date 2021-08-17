const { Model, DataTypes } = require('sequelize');

class Color extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Annoucements, { foreignKey: 'color_id', as: 'annoucement' })
  }
}

module.exports = Color