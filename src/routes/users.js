const express = require('express')
const router = express.Router()

const { validatorHandler } = require('../middlewares')
const {
  getUserController,
  getUsersController,
  createUserController,
  updateUserController,
  removeUserController,
} = require('../controllers/users')
const { createUserSchema, getUserSchema, updateUserSchema } = require('../schemas/users')

router.get('/', getUsersController)

router.get(
  '/:id',
  validatorHandler(getUserSchema, "params"),
  getUserController,
)

router.post(
  '/',
  validatorHandler(createUserSchema, "body"),
  createUserController,
)

router.patch(
  '/:id',
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  updateUserController,
)

router.delete(
  '/:id',
  validatorHandler(getUserSchema, "params"),
  removeUserController,
)

module.exports = router
