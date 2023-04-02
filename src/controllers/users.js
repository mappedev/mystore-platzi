const { usersService } = require('../services')

async function getUsersController(req, res) {
  const users = await usersService.find()
  return res.json(users)
}

async function getUserController(req, res, next) {
  const { id } = req.params

  try {
    const user = await usersService.findOne(id)
    return res.json(user)
  } catch (err) {
    next(err)
  }
}

async function createUserController(req, res, next) {
  const { body } = req

  try {
    const user = await usersService.create(body)
    return res.status(201).json({ msg: 'created', data: user })
  } catch (err) {
    next(err)
  }
}

async function updateUserController(req, res, next) {
  const { id } = req.params
  const { body } = req

  try {
    const user = await usersService.update(id, body)
    return res.json({ id, msg: 'updated', data: user })
  } catch (err) {
    next(err)
  }
}

async function removeUserController(req, res, next) {
  const { id } = req.params

  try {
    await usersService.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createUserController,
  getUsersController,
  getUserController,
  removeUserController,
  updateUserController,
}
