const { DataTypes, Sequelize } = require('sequelize')

const { USER_TABLE_NAME } = require('./users')

const CUSTOMER_TABLE_NAME = 'customers'
const CUSTOMER_MODEL_NAME = 'customer'

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  // Associations
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE_NAME,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

const customerOptions = {
  tableName: CUSTOMER_TABLE_NAME,
  timestamps: false,
}

module.exports = { CUSTOMER_MODEL_NAME, CUSTOMER_TABLE_NAME, CustomerSchema, customerOptions }
