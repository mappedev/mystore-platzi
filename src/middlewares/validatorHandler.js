const { createErr } = require('../utils')

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })

    if (error) {
      throw createErr(error.message, "Bad request", 400)
    }

    next()
  }
}

module.exports = validatorHandler
