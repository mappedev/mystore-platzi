const { DataTypes, Sequelize } = require('sequelize')

const USER_TABLE_NAME = 'users'
const USER_MODEL_NAME = 'user'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    field: 'created_at', // Formato ingresado en la tabla
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW, // Momento de inserción del registro
  },
}

const userOptions = {
  tableName: USER_TABLE_NAME,
  timestamps: false,
}

module.exports = { USER_MODEL_NAME, USER_TABLE_NAME, UserSchema, userOptions }
