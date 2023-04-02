const { DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE_NAME = 'categories';
const CATEGORY_MODEL_NAME = 'category';

const CategorySchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


const categoryOptions = {
  tableName: CATEGORY_TABLE_NAME,
  timestamps: false,
}

module.exports = { CATEGORY_MODEL_NAME, CATEGORY_TABLE_NAME, CategorySchema, categoryOptions }
