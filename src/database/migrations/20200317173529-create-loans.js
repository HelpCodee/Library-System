'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('loans',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        book_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'books', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        loan_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        devolution_date: {
          type: Sequelize.DATE,
        },
        penalty: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('loans');
  }
};