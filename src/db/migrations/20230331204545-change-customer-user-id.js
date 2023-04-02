'use strict';
const { DataTypes } = require('sequelize')

const { CUSTOMER_TABLE_NAME } = require('../models/customers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE_NAME, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    })
  },

  async down() { }
};
