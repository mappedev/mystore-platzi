const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const amount = Joi.number().integer().min(1)
const orderId = Joi.number().integer()
const productId = Joi.number().integer()

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const addItemSchema = Joi.object({
  amount: amount.required(),
  orderId: orderId.required(),
  productId: productId.required(),
})

module.exports = { addItemSchema, getOrderSchema, createOrderSchema };
