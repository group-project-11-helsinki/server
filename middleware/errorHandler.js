const errorHandler = function (err, req, res, next) {
  let errors;
  switch (err.name) {
    case 'SequelizeValidationError':
      errors = err.errors.map(el => el.message)
      res.status(400).json({
        errors
      })
      break;
    case 'SequelizeUniqueConstraintError':
      errors = err.errors.map(el => el.message)
      res.status(400).json({
        errors
      })
      break;
    case 'LoginError':
      errors = err.message;
      res.status(400).json({error : errors})
      break;
    case '404':
      res.status(404).json({error: err.message})
      break;
    case '403':
      res.status(404).json({error: err.message})
      break;
    case 'error-login':
      res.status(400).json({error: err.message})
      break;
    default:
      console.log({err});
      res.status(500).json({
        message: 'internal server error'
      })
      break;
  }
}

module.exports = errorHandler;