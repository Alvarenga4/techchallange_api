'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('annoucements', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'colors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'brands', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      model_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'models', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      version_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'versions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      km: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sale_value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_armored: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
