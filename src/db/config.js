const { config } = require('../config')

const { host, name, password, port, user } = config.db
const USER = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)
const URI = `postgres://${USER}:${PASSWORD}@${host}:${port}/${name}`

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  },
}
