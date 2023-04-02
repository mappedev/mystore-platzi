require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 8080,
  db: {
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // host: process.env.DB_HOST,
    // name: process.env.DB_NAME,
    // port: process.env.DB_POSTGRESQL_PORT,
    // port: process.env.DB_MYSQL_PORT,
    url: process.env.DB_URL,
  }
}

module.exports = { config }
