const { categoriesService } = require('../services')

async function getCategoriesController(req, res) {
  const categories = await categoriesService.find()
  return res.json(categories)
}

async function getCategoryController(req, res, next) {
  const { id } = req.params

  try {
    const category = await categoriesService.findOne(id)
    return res.json(category)
  } catch (err) {
    next(err)
  }
}

async function createCategoryController(req, res, next) {
  const { body } = req

  try {
    const category = await categoriesService.create(body)
    return res.status(201).json({ msg: 'created', data: category })
  } catch (err) {
    next(err)
  }
}

async function updateCategoryController(req, res, next) {
  const { id } = req.params
  const { body } = req

  try {
    const category = await categoriesService.update(id, body)
    return res.json({ id, msg: 'updated', data: category })
  } catch (err) {
    next(err)
  }
}

async function removeCategoryController(req, res, next) {
  const { id } = req.params

  try {
    await categoriesService.remove(id)
    return res.json({ id, msg: 'deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createCategoryController,
  getCategoriesController,
  getCategoryController,
  removeCategoryController,
  updateCategoryController,
}
