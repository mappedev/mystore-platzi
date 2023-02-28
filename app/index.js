const express = require('express')
const router = express.Router()

const categoriesRouter = require('./categories/routes')
const productsRouter = require('./products/route')
const usersRouter = require('./users/routes')

const PREFIX = '/api/v1'

const routerAPI = (app) => {
  app.use(PREFIX, router)
  router.use(`/categories`, categoriesRouter)
  router.use(`/products`, productsRouter)
  router.use(`/users`, usersRouter)
}

module.exports = routerAPI
