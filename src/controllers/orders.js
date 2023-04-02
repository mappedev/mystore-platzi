const { ordersService } = require('../services')

async function getOrdersController(req, res) {
  const orders = await ordersService.find()
  return res.json(orders)
}

async function getOrderController(req, res, next) {
  const { id } = req.params

  try {
    const order = await ordersService.findOne(id)
    return res.json(order)
  } catch (err) {
    next(err)
  }
}

async function createOrderController(req, res, next) {
  const { body } = req

  try {
    const order = await ordersService.create(body)
    return res.status(201).json({ msg: 'created', data: order })
  } catch (err) {
    next(err)
  }
}

async function removeOrderController(req, res, next) {
  const { id } = req.params

  try {
    await ordersService.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

async function addItemController(req, res, next) {
  const { body } = req

  try {
    const item = await ordersService.addItem(body)
    return res.status(201).json({ msg: 'created', data: item })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createOrderController,
  addItemController,
  getOrdersController,
  getOrderController,
  removeOrderController,
}
