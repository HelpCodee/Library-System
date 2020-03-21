'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('providers', 
      [
        {
          name: "Loja da Esquina",
          email: "loja.esquina@mail.com",
          telephone: "9856231424",
          cpf: "66135463854",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Loja da Esquina",
          email: "loja.esquina@mail.com",
          telephone: "9856231424",
          cpf: "66135463854",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Loja da Esquina",
          email: "loja.esquina@mail.com",
          telephone: "9856231424",
          cpf: "66135463854",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('providers', null, {});
  }
};
