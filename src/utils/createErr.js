function createErr(msg, errorCode = "SERVER_ERROR", statusCode = 500) {
  const err = new Error(msg)
  err.statusCode = statusCode
  err.errorCode = errorCode
  return err
}

// const errors = {
//   notFound: msg => createErr(msg, "NOT_FOUND", 404),
//   conflict: msg => createErr(msg, "CONFLICT", 409),
// }

module.exports = { createErr }
