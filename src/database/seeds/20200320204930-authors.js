'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', 
      [
        {
          name: "José",
          surname: "dos Santos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maria",
          surname: "das Dores",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Machado",
          surname: "de Alencar",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authors', null, {});
  }
};
