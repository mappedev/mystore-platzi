const express = require('express')
const router = express.Router()

const categoriesRouter = require('./categories')
const productsRouter = require('./products')
const usersRouter = require('./users')
const customersRouter = require('./customers')
const ordersRouter = require('./orders')

const PREFIX = '/api/v1'

const routerAPI = (app) => {
  app.use(PREFIX, router)
  router.use('/categories', categoriesRouter)
  router.use('/customers', customersRouter)
  router.use('/orders', ordersRouter)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
}

module.exports = routerAPI
