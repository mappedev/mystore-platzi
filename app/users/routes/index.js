const express = require('express')
const router = express.Router()

const service = require('../services')

// Init users
service.generate()

router.get('/', (req, res) => {
  const users = service.find()

  return res.json({ data: users })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const user = service.findOne(id)

  if (!user) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, data: user })
})

router.post('/', (req, res) => {
  const { body } = req

  const name = body.name
  const email = body.email
  const image = body.image

  if (!name || !email || !image) {
    return res.status(400).json({
      msg: 'Bad request',
      data: body
    })
  }

  const user = service.create(name, email, image)

  return res.status(201).json({ msg: 'created', data: user })
})

router.patch('/:id', (req, res) => {
  const { body } = req
  const { id } = req.params

  const name = body.name
  const email = body.email
  const image = body.image

  if (!name && !email && !image) {
    return res.status(400).json({
      msg: 'Bad request',
      data: body
    })
  }

  const user = service.update(id, name, email, image)

  if (!user) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, msg: 'updated', data: user })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const user = service.remove(id)

  if (!user) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, msg: 'deleted' })
})

module.exports = router
