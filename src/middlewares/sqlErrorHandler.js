const { ValidationError } = require("sequelize");
const { createErr } = require("../utils");

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    throw createErr(err.errors[0].message, "VALIDATION_ERROR", 409)
  }
  next(err)
}

module.exports = ormErrorHandler
