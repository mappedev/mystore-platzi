/* eslint-disable no-console */
const { config } = require('../config')
// Client option
// const { Client } = require('pg')
// const { Client } = require('pg')

// async function getConnection() {
//   const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'mappedev',
//     password: '29mappedb03',
//     database: 'mystore_db',
//   })
//   await client.connect()
//   return client
// }

// module.exports = getConnection

const { host, name, password, port, user } = config.db
const USER = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)
const URI = `postgres://${USER}:${PASSWORD}@${host}:${port}/${name}`

// Pool option
const { Pool } = require('pg')

const pool = new Pool({ connectionString: URI })

// promise - checkout a client
pool.connect().then((client) => {
  return client
    .query('SELECT * FROM tasks')
    .catch((err) => {
      client.release()
      console.log(err.stack)
    })
})

module.exports = pool
