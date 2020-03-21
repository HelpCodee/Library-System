'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', 
      [
        {
          name: "Aventura",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mistério",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fantasia",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
