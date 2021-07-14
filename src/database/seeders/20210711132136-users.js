'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Loki',
        dob: '2021-06-09',
        address: 'Asgard',
        description: 'God of cheating and Prince of Asgard',
        createdAt: new Date().toISOString().substring(0,19).replace('T',' '),
        updatedAt:new Date().toISOString().substring(0,19).replace('T',' ')
      },
      {
        name: 'Natasha Romanoff',
        dob: '2021-07-09',
        address: 'Avengers Mansion',
        description: 'Black Widow',
        createdAt: new Date().toISOString().substring(0,19).replace('T',' '),
        updatedAt:new Date().toISOString().substring(0,19).replace('T',' ')
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
