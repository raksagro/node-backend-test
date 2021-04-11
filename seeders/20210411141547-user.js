'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 'c3cf50f2-7ffa-4411-9d8e-b4d72d4bac85',
        name: "Vitor Hugo",
        address: JSON.stringify({
          "zipCode": "04733-000",
          "street": "Rua Adolfo Pinheiro",
          "number": "2054",
          "complement": "",
          "istrict": "Santo Amaro",
          "city": "São Paulo",
          "state": "SP",
          "country": "Brasil"
        }),
        description:"Desenvolvedor Fullstack",
        created_at: new Date().toJSON(),
        updated_at: new Date().toJSON()
      },
      {
        id: '5dc204b3-b508-4451-b7ff-c2aab22493ee',
        name: "Rogério Cardoso",
        address: JSON.stringify({
          "zipCode": "04546-001",
          "street": "Rua Casa do Ator",
          "number": "311",
          "complement": "",
          "istrict": "Vila Olímpia",
          "city": "São Paulo",
          "state": "SP",
          "country": "Brasil"
        }),
        description:"Desenvolvedor Front-end",
        created_at: new Date().toJSON(),
        updated_at: new Date().toJSON()
      },
    ],);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
