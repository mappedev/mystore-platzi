function logErrors(err, req, res, next) {
  // console.error(err.message)
  // eslint-disable-next-line no-console
  console.error(err)
  next(err)
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  // Se debe colocar el parámetro next para indicar que es un middleware
  const { statusCode, errorCode, message } = err
  return res.status(err.statusCode).json({
    statusCode,
    errorCode,
    message,
  })
}

// function boomErrorHandler(err, req, res, next) {
//   if (err.isBoom) {
//     const { output } = err
//     return res.status(output.statusCode).json(output.payload)
//   }
//   next(err)
// }

module.exports = { errorHandler, logErrors }
