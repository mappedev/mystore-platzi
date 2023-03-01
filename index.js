const express = require('express')
const app = express()
const cors = require('cors')

const routerAPI = require('./app')
const { errorHandler, logErrors } = require('./app/commons/middlewares')

const ENV_DEV = process.env.NODE_ENV !== 'production'

const PORT = 8080

const WHITELIST = [
  'https://mappedev-mystore-platzi.onrender.com',
]
const corsOptions = {
  origin: ENV_DEV
    ? '*'
    : (origin, cb) => {
      WHITELIST.includes(origin)
        ? cb(null, true)
        : cb(new Error("Not allowed by CORS"))
    }
}

// General middlewares
app.use(express.json())
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  return res.send("Hola Server Express")
})

routerAPI(app)

// Local Middlewares
app.use(logErrors)
app.use(errorHandler)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`)
})
