'use strict';

const { DataTypes } = require('sequelize')

const { TABLE_NAME } = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(TABLE_NAME, 'role', {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'customer',
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(TABLE_NAME, 'role')
  }
};
