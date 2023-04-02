const { customersService } = require('../services')

async function getCustomersController(req, res) {
  const customers = await customersService.find()
  return res.json(customers)
}

async function getCustomerController(req, res, next) {
  const { id } = req.params

  try {
    const customer = await customersService.findOne(id)
    return res.json(customer)
  } catch (err) {
    next(err)
  }
}

async function createCustomerController(req, res, next) {
  const { body } = req

  try {
    const customer = await customersService.create(body)
    return res.status(201).json({ msg: 'created', data: customer })
  } catch (err) {
    next(err)
  }
}

async function updateCustomerController(req, res, next) {
  const { id } = req.params
  const { body } = req

  try {
    const customer = await customersService.update(id, body)
    return res.json({ id, msg: 'updated', data: customer })
  } catch (err) {
    next(err)
  }
}

async function removeCustomerController(req, res, next) {
  const { id } = req.params

  try {
    await customersService.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createCustomerController,
  getCustomersController,
  getCustomerController,
  removeCustomerController,
  updateCustomerController,
}
