const express = require('express')
const app = express()
const cors = require('cors')

const routerAPI = require('./src/routes')
const { errorHandler, logErrors, ormErrorHandler } = require('./src/middlewares')
const { config } = require('./src/config')

const PORT = config.port

const WHITELIST = ['http://localhost:8080']
const corsOptions = {
  origin: (origin, cb) => {
    WHITELIST.includes(origin) || !origin
    !origin
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
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`)
})
