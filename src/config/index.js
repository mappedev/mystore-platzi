require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 8080,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.DB_POSTGRESQL_PORT,
    // port: process.env.DB_MYSQL_PORT,
  }
}

module.exports = { config }
