const { Op } = require('sequelize')

const { models } = require('../libs/sequelize')

const { createErr } = require('../utils')

async function create(data) {
  const newProduct = await models.product.create(data)
  return newProduct
}

async function find(query) {
  const options = {
    include: ['category'],
    where: {},
  }

  if (query) {
    const { price, price_min, price_max, limit, offset } = query

    if (price) {
      options.where.price = price
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.between]: [price_min, price_max],
      }
      //   options.where.price = {
      //     [Op.gte]: price_min,
      //     [Op.lte]: price_max,
      //   };
    }

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
  }

  const products = await models.product.findAll(options)
  return products
}

async function findOne(id) {
  const product = await models.product.findByPk(id, {
    include: ['category']
  })

  if (!product) {
    throw createErr("Produt not found", "not found", 404)
  }

  return product
}

async function update(id, data) {
  const product = await models.product.findByPk(id)

  if (!product) {
    throw createErr("Produt not found", "not found", 404)
  }

  const productUpdated = product.update(data)

  return productUpdated
}

async function remove(id) {
  const product = await models.product.findByPk(id)

  if (!product) {
    throw createErr("Product not found", "not found", 404)
  }

  await product.destroy()

  return product
}

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
}
