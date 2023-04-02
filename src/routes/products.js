const express = require('express')
const router = express.Router()

const { validatorHandler } = require('../middlewares')
const {
  getProductController,
  getProductsController,
  createProductController,
  updateProductController,
  removeProductController,
} = require('../controllers/products')
const {
  createProductSchema,
  getProductSchema,
  getProductsSchema,
  updateProductSchema,
} = require('../schemas/products')

router.get(
  '/',
  validatorHandler(getProductsSchema, 'params'),
  getProductsController,
)

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  getProductController
)

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  createProductController,
)

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProductController,
)

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  removeProductController,
)

// router.get('/filter', (req, res) => {
//   res.send("Yo soy un filter")
// })

// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   return res.json({ id, name: 'Product 2', price: 2000 })
// })
// ! Las dos rutas anteriores chocarían entre sí si /products/filter estuviera después de /products/:id
// * Para solventar esto, lo que se debe hacer es que las rutas no dinámicas, estén antes de las rutas dinámicas

module.exports = router
