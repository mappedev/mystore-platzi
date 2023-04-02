'use strict';

const { USER_TABLE_NAME, UserSchema } = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE_NAME, UserSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE_NAME)
  }
};

// Si tuvieramos más tablas para crear, se podría agregar en una misma migración. Una migración no está atado a una tabla.
