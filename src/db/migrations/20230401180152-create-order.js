'use strict';

const { DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE_NAME } = require('../models/orders');
const { CUSTOMER_TABLE_NAME } = require('../models/customers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      // Associations
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        References: {
          model: CUSTOMER_TABLE_NAME,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE_NAME)
  }
};
