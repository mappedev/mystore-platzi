'use strict';

const { UserSchema, TABLE_NAME } = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(TABLE_NAME, 'role', UserSchema.role)
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(TABLE_NAME, 'role')
  }
};
