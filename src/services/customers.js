const { models } = require('../libs/sequelize')

const { createErr } = require('../utils')

async function create(data) {
  // const newUser = await models.user.create(data.user)
  // const newCustomer = await models.customer.create({
  //   ...data,
  //   userId: newUser.id,
  // })
  /*
  * Lo de arriba no es necesario, ya sequelize sabe que tiene que crearlo porque está declarado en el modelo
  */
  const newCustomer = await models.customer.create(data, {
    include: ['user']
  })
  return newCustomer
}

async function find() {
  const customers = await models.customer.findAll()
  return customers
}

async function findOne(id) {
  const customer = await models.customer.findByPk(id, {
    include: ['user', 'orders']
  })

  if (!customer) {
    throw createErr("Customer not found", "not found", 404)
  }

  return customer
}

async function update(id, data) {
  const customer = await models.customer.findByPk(id)

  if (!customer) {
    throw createErr("Customer not found", "not found", 404)
  }

  const customerUpdated = customer.update(data)
  return customerUpdated
}

async function remove(id) {
  const customer = await models.customer.findByPk(id)

  if (!customer) {
    throw createErr("Customer not found", "not found", 404)
  }

  await customer.destroy()

  return customer
}

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
}
