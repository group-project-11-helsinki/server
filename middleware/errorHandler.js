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
    
    default:
      res.status(500).json({
        message: 'internal server error'
      })
      break;
  }
}