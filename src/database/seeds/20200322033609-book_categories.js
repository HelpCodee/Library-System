'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('book_categories', 
      [
        {
          book_id: 1,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 1,
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 2,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 2,
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 3,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 3,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('book_categories', null, {});
  }
};
