const express = require('express')
const router = express.Router()

const service = require('../services')

// Init categories
service.generate()

router.get('/', (req, res) => {
  const categories = service.find()

  return res.json({ data: categories })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const category = service.findOne(id)

  if (!category) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, data: category })
})

router.post('/', (req, res) => {
  const { body } = req

  const name = body.name

  if (!name) {
    return res.status(400).json({
      msg: 'Bad request',
      data: body
    })
  }

  const category = service.create(name)

  return res.status(201).json({ msg: 'created', data: category })
})

router.patch('/:id', (req, res) => {
  const { body } = req
  const { id } = req.params

  const name = body.name

  if (!name) {
    return res.status(400).json({
      msg: 'Bad request',
      data: body
    })
  }

  const category = service.update(id, name)

  if (!category) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, msg: 'updated', data: category })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const category = service.remove(id)

  if (!category) {
    return res.status(404).json({
      id,
      msg: "Not found",
    })
  }

  return res.json({ id, msg: 'deleted' })
})

router.get('/:catId/products/:proId', (req, res) => {
  const { catId, proId } = req.params
  return res.json({
    categoryId: catId,
    productId: proId,
    name: 'Product 2',
    price: 2000,
  })
})


module.exports = router
