'use strict';

const { CUSTOMER_TABLE_NAME, CustomerSchema } = require('../models/customers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE_NAME, CustomerSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE_NAME)
  }
};
