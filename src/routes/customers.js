const express = require('express')
const router = express.Router()

const { validatorHandler } = require('../middlewares')
const {
  getCustomersController,
  getCustomerController,
  createCustomerController,
  updateCustomerController,
  removeCustomerController,
} = require('../controllers/customers')
const {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customers')

router.get('/', getCustomersController)

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  getCustomerController,
)

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  createCustomerController,
)

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  updateCustomerController,
)

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  removeCustomerController,
)

module.exports = router
