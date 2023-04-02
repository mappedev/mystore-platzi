const { DataTypes, Sequelize } = require('sequelize')

const { ORDER_TABLE_NAME } = require('./orders')
const { PRODUCT_TABLE_NAME } = require('./products')

const ORDER_PRODUCT_TABLE_NAME = 'orders_products'
const ORDER_PRODUCT_MODEL_NAME = 'orderProduct'

const orderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  // Associations
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    // unique: true, // * No puede ser único porque necesitamos agregar varios
    references: {
      model: ORDER_TABLE_NAME,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE_NAME,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

const orderProductOptions = {
  tableName: ORDER_PRODUCT_TABLE_NAME,
  timestamps: false,
}

module.exports = {
  ORDER_PRODUCT_MODEL_NAME,
  ORDER_PRODUCT_TABLE_NAME,
  orderProductSchema,
  orderProductOptions,
}
