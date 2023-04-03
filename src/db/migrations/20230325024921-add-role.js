'use strict';

const { DataTypes } = require('sequelize')

const { USER_TABLE_NAME } = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.addColumn(USER_TABLE_NAME, 'role', {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'customer',
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE_NAME, 'role')
  }
};
