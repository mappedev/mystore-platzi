
const service = require('./service')

// Init products
service.generate()

async function getProductsController(req, res) {
  const products = await service.find()
  return res.json({ data: products })
}

async function getProductController(req, res, next) {
  const { id } = req.params

  try {
    const product = await service.findOne(id)
    return res.json({ id, data: product })
  } catch (err) {
    next(err)
    // return res.status(404).json({ id, msg: e.message })
  }
}

async function createProductController(req, res, next) {
  const { body } = req
  const name = body.name
  const price = body.price
  const image = body.image

  try {
    const product = await service.create(name, price, image)
    return res.status(201).json({ msg: 'created', data: product })
  } catch (err) {
    next(err)
  }
}

async function updateProductController(req, res, next) {
  const { body } = req
  const { id } = req.params
  const name = body.name
  const price = body.price
  const image = body.image

  try {
    const product = await service.update(id, name, price, image)
    return res.json({ id, msg: 'updated', data: product })
  } catch (err) {
    next(err)
  }

}

async function removeProductController(req, res, next) {
  const { id } = req.params

  try {
    await service.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createProductController,
  getProductController,
  getProductsController,
  removeProductController,
  updateProductController,
}
