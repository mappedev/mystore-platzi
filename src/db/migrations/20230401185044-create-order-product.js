'use strict';

const { ORDER_PRODUCT_TABLE_NAME, orderProductSchema } = require('../models/orders-products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE_NAME, orderProductSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE_NAME)
  }
};
