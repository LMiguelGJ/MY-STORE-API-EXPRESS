'use strict';

const { UserSchemas, USER_TABLE} = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchemas);
  },

  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE)  }
};
