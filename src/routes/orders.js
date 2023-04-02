const express = require('express')
const router = express.Router()

const { validatorHandler } = require('../middlewares')
const {
  getOrdersController,
  getOrderController,
  createOrderController,
  removeOrderController,
  addItemController,
} = require('../controllers/orders')
const {
  createOrderSchema,
  getOrderSchema,
  addItemSchema,
} = require('../schemas/orders')

router.get('/', getOrdersController)

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  getOrderController,
)

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  createOrderController,
)

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  addItemController,
)


router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  removeOrderController,
)

module.exports = router
