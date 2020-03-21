'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', 
      [
        {
          user_id: 1,
          zipcode: "32513131",
          district: "Vale do Sol",
          street: "Rua João de Almeida",
          number: "305",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          zipcode: "86541285",
          district: "Vila Diamantina",
          street: "Rua Brasil dos Campos",
          number: "27",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          zipcode: "85645688",
          district: "Chapada das Neves",
          street: "Rua Urso Polar",
          number: "98",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};
