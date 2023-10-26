'use strict';
const bcrypt = require('bcrypt')
let r = () => (Math.random() + 1).toString(36).substring(2);

let login = r()
let password = r()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [result, metadata] = await queryInterface.sequelize.query(`SELECT * FROM mishka.admin WHERE login = '${login}'`)
    if(result.length > 0) {
      console.log('Генерация с повторениям\nПовторите попытку');
    } else {
      console.log(`username: ${login}`);
      console.log(`password: ${password}`);
      return queryInterface.bulkInsert('Admin', [{
        login,
        password: await bcrypt.hash(password, 5)
      }]);
    }
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admin', null, {});
  }
};