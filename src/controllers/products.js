const { productsService } = require('../services')

async function getProductsController(req, res) {
  const { query } = req

  const products = await productsService.find(query)
  return res.json(products)
}

async function getProductController(req, res, next) {
  const { id } = req.params

  try {
    const product = await productsService.findOne(id)
    return res.json(product)
  } catch (err) {
    next(err)
  }
}

async function createProductController(req, res, next) {
  const { body } = req

  try {
    const product = await productsService.create(body)
    return res.status(201).json({ msg: 'created', data: product })
  } catch (err) {
    next(err)
  }
}

async function updateProductController(req, res, next) {
  const { id } = req.params
  const { body } = req

  try {
    const product = await productsService.update(id, body)
    return res.json({ id, msg: 'updated', data: product })
  } catch (err) {
    next(err)
  }
}

async function removeProductController(req, res, next) {
  const { id } = req.params

  try {
    await productsService.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createProductController,
  getProductsController,
  getProductController,
  removeProductController,
  updateProductController,
}
