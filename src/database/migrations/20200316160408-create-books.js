'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'authors', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        publisher_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'publishers', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'categories', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
        volume: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        edition: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        year: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        synopsis: {
          type: Sequelize.TEXT,
          allowNull: false,
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
    return queryInterface.dropTable('books');
  }
};
