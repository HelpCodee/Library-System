'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('loans', 
      [
        {
          book_id: 2,
          user_id: 1,
          loan_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 3,
          user_id: 3,
          loan_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          book_id: 1,
          user_id: 2,
          loan_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('loans', null, {});
  }
};
