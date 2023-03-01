const faker = require('faker')
// const boom = require('@hapi/boom')

const { createErr } = require('../commons/utils/createErr')

const products = []
const generate = (limit = 100) => {
  for (let i = 0; i < limit; i++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
      isBlock: faker.datatype.boolean(),
    }

    products.push(product)
  }
}


const create = async (name, price, image) => {
  const product = {
    id: faker.datatype.uuid(),
    name,
    price,
    image,
    isBlock: false,
  }

  products.push(product)

  return product
}

const find = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000)
  })
}

const findOne = async (id) => {
  const product = products.find(product => product.id === id)

  if (!product) {
    // throw new Error("Product not found")
    throw createErr("Product not found", "not found", 404)
  }

  if (product.isBlock) {
    // throw boom.conflict('Product is block')
    throw createErr("Product is block", "block", 409)
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(product), 1000)
  })
}

const update = async (id, name = null, price = null, image = null) => {
  const product = products.find(product => product.id === id)

  if (!product) {
    // throw new Error("Product not found")
    // throw boom.notFound('Product not found')
    throw createErr("Product not found", "not found", 404)
  }


  if (name) product.name = name
  if (price) product.price = price
  if (image) product.image = image

  return product
}

const remove = async (id) => {
  const productIndex = products.findIndex(product => product.id === id)

  if (productIndex === -1) {
    // throw new Error("Product not found")
    // throw boom.notFound('Product not found')
    throw createErr("Product not found", "not found", 404)
  }

  products.splice(productIndex, 1)

  return products[productIndex]
}

module.exports = {
  generate,
  create,
  find,
  findOne,
  update,
  remove,
}
