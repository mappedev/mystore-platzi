const faker = require('faker')

const categories = []
const generate = (limit = 100) => {
  for (let i = 0; i < limit; i++) {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
    }

    categories.push(category)
  }
}

const create = (name) => {
  const category = {
    id: faker.datatype.uuid(),
    name,
  }

  categories.push(category)

  return category
}

const find = () => {
  return categories
}

const findOne = (id) => {
  const category = categories.find(category => category.id === id)

  if (!category) return

  return category
}

const update = (id, name = null) => {
  const category = categories.find(category => category.id === id)

  if (!category) return

  if (name) category.name = name

  return category
}

const remove = (id) => {
  const categoryIndex = categories.findIndex(category => category.id === id)

  if (categoryIndex === -1) return

  const product = categories[categoryIndex]

  categories.splice(categoryIndex, 1)

  return product
}

module.exports = {
  generate,
  create,
  find,
  findOne,
  update,
  remove,
}
