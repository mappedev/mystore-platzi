const express = require('express')
const app = express()
const cors = require('cors')

const routerAPI = require('./app')
const { errorHandler, logErrors } = require('./app/commons/middlewares')

const PORT = process.env.PORT || 8080

const WHITELIST = ['http://localhost:8080']
const corsOptions = {
  origin: (origin, cb) => {
    WHITELIST.includes(origin) || !origin
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
