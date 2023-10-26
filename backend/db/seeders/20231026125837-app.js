'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('App', [{
      isDev: true,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('App', null, {});
  }
};
