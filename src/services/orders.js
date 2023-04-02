const { models } = require('../libs/sequelize')

const { createErr } = require('../utils')

async function create(data) {
  const newOrder = await models.order.create(data)
  return newOrder
}

async function addItem(data) {
  const newItem = await models.orderProduct.create(data)
  return newItem
}

async function find() {
  const orders = await models.order.findAll()
  return orders
}

async function findOne(id) {
  const order = await models.order.findByPk(id, {
    // include: ['customer'],
    /*
    * Podemos detallar a un más indicando el usuario del customer, cómo se hace en las siguientes líneas...
    */
    include: [
      {
        association: 'customer',
        include: ['user']
      },
      'items',
    ]
  })

  if (!order) {
    throw createErr("Order not found", "not found", 404)
  }

  return order
}

async function remove(id) {
  const order = await models.order.findByPk(id)

  if (!order) {
    throw createErr("Order not found", "not found", 404)
  }

  await order.destroy()

  return order
}

module.exports = {
  create,
  addItem,
  find,
  findOne,
  remove,
}
