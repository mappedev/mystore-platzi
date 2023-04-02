const { models } = require('../libs/sequelize')

const { createErr } = require('../utils')

async function create(data) {
  const newCategory = await models.category.create(data)
  return newCategory
}

async function find() {
  const categories = await models.category.findAll()
  return categories
}

async function findOne(id) {
  const category = await models.category.findByPk(id, {
    include: ['products']
  })

  if (!category) {
    throw createErr("Category not found", "not found", 404)
  }

  return category
}

async function update(id, data) {
  const category = await models.category.findByPk(id)

  if (!category) {
    throw createErr("Category not found", "not found", 404)
  }

  const categoryUpdated = category.update(data)

  return categoryUpdated
}

async function remove(id) {
  const category = await models.category.findByPk(id)

  if (!category) {
    throw createErr("Category not found", "not found", 404)
  }

  await category.destroy()

  return category
}

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
}
