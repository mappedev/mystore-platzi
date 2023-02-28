function createErr(msg, errorCode, statusCode = 500) {
  const err = new Error(msg)
  err.statusCode = statusCode
  err.errorCode = errorCode
  return err
}

module.exports = { createErr }
