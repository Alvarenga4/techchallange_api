const { Model, DataTypes } = require('sequelize');

class Simulation extends Model {
  static init(sequelize) {
    super.init({
      score: DataTypes.STRING,
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      tellphone: DataTypes.STRING,
      birthday: DataTypes.STRING,
      state: DataTypes.STRING,
      email: DataTypes.STRING,
      is_approved: DataTypes.BOOLEAN,
      prohibited: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
  
  static associate(models) {
    this.belongsTo(models.Models, { foreignKey: 'annoucement_id', as: 'annoucement' })
  }
}

module.exports = Simulation