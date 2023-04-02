// const getConnection = require('../../libs/postgres')
const { models } = require('../libs/sequelize')

const { createErr } = require('../utils')

async function create(data) {
  const newUser = await models.user.create(data)
  return newUser
}

async function find() {
  const users = await models.user.findAll()
  return users
}

async function findOne(id) {
  const user = await models.user.findByPk(id, {
    include: ['customer']
  })

  if (!user) {
    throw createErr("User not found", "not found", 404)
  }

  return user
}

async function update(id, data) {
  const user = await models.user.findByPk(id)

  if (!user) {
    throw createErr("User not found", "not found", 404)
  }

  const userUpdated = user.update(data)
  return userUpdated
}

async function remove(id) {
  const user = await models.user.findByPk(id)

  if (!user) {
    throw createErr("User not found", "not found", 404)
  }

  await user.destroy()

  return user
}

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
}
