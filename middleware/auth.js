const { User, Image } = require('../models')
const { verifyToken } = require('../helper/jwt')

function authenticate (req, res, next) {
  try {
    if (req.headers.access_token) {
      let decoded = verifyToken(req.headers.access_token)
  
      User.findByPk(decoded.id)
        .then(user => {
       
          if (user) {
            req.UserId = decoded.id
            next()
          } else {
            throw ({ name: "error-login",  message: 'not found' })
          }
        })
    } else {
      throw ({ name: "error-login",  message: 'please login first'})
    }
  } catch (err) {
  
    next(err)
    
  }
}

function authorize (req, res, next) {
  let UserId = req.UserId
  Image.findOne({
    where: {
      UserId
    }
  })
    .then(image => {
      if (image) {
        if (image.UserId == UserId) {
          next()
        } else {
          throw ({ name: "403", message: 'unauthorize' })
        }
      } else {
        throw ({ name: "404", message: 'not found'})
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = { authenticate, authorize }