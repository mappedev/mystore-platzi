const Joi = require('joi')

const {
  createUserSchema,
  // updateUserSchema,
} = require('./users')

const id = Joi.number().integer()
const name = Joi.string()
const lastName = Joi.string()
const phone = Joi.string()
const userId = Joi.number().integer()

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone,
  // userId: userId.require(),
  user: createUserSchema,
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId,
  // user: updateUserSchema,
})

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
