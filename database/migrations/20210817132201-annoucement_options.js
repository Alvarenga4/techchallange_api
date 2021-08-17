'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('annoucement_options', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      annoucement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'annoucements', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      options_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'vehicle_options', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
