const express = require('express')
const router = express.Router()

const { validatorHandler } = require('../middlewares')
const {
  getCategoriesController,
  getCategoryController,
  createCategoryController,
  updateCategoryController,
  removeCategoryController,
} = require('../controllers/categories')
const {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} = require('../schemas/categories')
const { getUserSchema } = require('../schemas/users')

router.get('/', getCategoriesController)

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  getCategoryController,
)

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  createCategoryController,
)

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategoryController,
)

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  removeCategoryController,
)

module.exports = router
