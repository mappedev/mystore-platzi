'use strict';

const { ORDER_TABLE_NAME, OrderSchema } = require('../models/orders');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_TABLE_NAME, OrderSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE_NAME)
  }
};
