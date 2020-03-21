'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('publishers', 
      [
        {
          name: "Darkside",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Arqueiro",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Saraiva",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('publishers', null, {});
  }
};
