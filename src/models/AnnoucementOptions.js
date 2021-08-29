const { Model, DataTypes } = require('sequelize');

class AnnoucementOptions extends Model {
  static init(sequelize) {
    super.init({
      annoucement_id: DataTypes.INTEGER,
      options_id: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {

  }
}

module.exports = AnnoucementOptions;