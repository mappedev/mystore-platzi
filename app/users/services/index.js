const faker = require('faker')

const users = []
const generate = (limit = 100) => {
  for (let i = 0; i < limit; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl()
    }
    users.push(user)
  }
}


const create = (name, email, image) => {
  const user = {
    id: faker.datatype.uuid(),
    name,
    email,
    image,
  }

  users.push(user)

  return user
}

const find = () => {
  return users
}

const findOne = (id) => {
  const user = users.find(user => user.id === id)

  if (!user) return

  return user
}

const update = (id, name = null, email = null, image = null) => {
  const user = users.find(user => user.id === id)

  if (!user) return

  if (name) user.name = name
  if (email) user.email = email
  if (image) user.image = image

  return user
}

const remove = (id) => {
  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex === -1) return

  const user = users[userIndex]

  users.splice(userIndex, 1)

  return user
}

module.exports = {
  generate,
  create,
  find,
  findOne,
  update,
  remove,
}
