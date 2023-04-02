'use strict';

const { CATEGORY_TABLE_NAME, CategorySchema } = require('../models/categories');
const { PRODUCT_TABLE_NAME, ProductSchema } = require('../models/products')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE_NAME, CategorySchema)
    await queryInterface.createTable(PRODUCT_TABLE_NAME, ProductSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE_NAME)
    await queryInterface.dropTable(PRODUCT_TABLE_NAME)
  }
};
