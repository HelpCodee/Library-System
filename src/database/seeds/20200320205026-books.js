'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', 
      [
        {
          title: "Quem matou Jeanuce?",
          author_id: 1,
          publisher_id: 1,
          volume: 1,
          edition: 1,
          year: 1982,
          synopsis: 'Algum texto longo, mas não muito.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "O que desenvolvedores comem?",
          author_id: 3,
          publisher_id: 3,
          volume: 1,
          edition: 1,
          year: 2018,
          synopsis: 'Algum texto longo, mas não muito.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Nunca mais erre a vírgula",
          author_id: 2,
          publisher_id: 2,
          volume: 1,
          edition: 1,
          year: 2020,
          synopsis: 'Algum texto longo, mas não muito.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};
