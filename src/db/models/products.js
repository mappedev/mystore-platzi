const { DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE_NAME } = require('./categories');

const PRODUCT_TABLE_NAME = 'products';
const PRODUCT_MODEL_NAME = 'product';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  // Associations
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE_NAME,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}


const productOptions = {
  tableName: PRODUCT_TABLE_NAME,
  timestamps: false,
}

module.exports = { PRODUCT_MODEL_NAME, PRODUCT_TABLE_NAME, ProductSchema, productOptions }
