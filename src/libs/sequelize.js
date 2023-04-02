const { Sequelize } = require('sequelize')

const { config } = require('../config')
const setupModels = require('../db')

const { host, name, password, port, user } = config.db
const USER = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)
const URI = `postgres://${USER}:${PASSWORD}@${host}:${port}/${name}`

const sequelize = new Sequelize(URI, {
  // dialect: 'postgres',
  dialect: 'postgres',
  // eslint-disable-next-line no-console
  logging: console.log,
})

setupModels(sequelize)
// sequelize.sync() // BAD PRACTICE, recommendation sequelize-cli

module.exports = sequelize
