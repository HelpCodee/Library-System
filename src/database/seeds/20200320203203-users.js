"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          surname: "Doe",
          email: "john@doe.com",
          password: "1234",
          telephone: "321654",
          cpf: "654987321",
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John",
          surname: "Travolta",
          email: "john@travolta.com",
          password: "12344567",
          telephone: "2376894",
          cpf: "31516849",
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Leonardo",
          surname: "Lima",
          email: "leonardo@email.com",
          password: "98745632",
          telephone: "985745632",
          cpf: "05426843279",
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
