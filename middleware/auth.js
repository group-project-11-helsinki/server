const { User, Image } = require('../models')
const verifyToken //= require('../helper/jwt')

function authenticate (req, res, next) {
  try {
    if (req.headers.access_token) {
      let { id } = verifyToken(req.headers.access_token)
      User.findByPk(id)
        .then(user => {
          if (user) {
            req.UserId = payload.id
            next()
          } else {
            throw ({ message: '403 forbidden' })
          }
        })
    } else {
      throw ({ message: 'please login first'})
    }
  } catch (err) {
    console.log(err)
    //next(err)
  }
}

function authorize (req, res, next) {
  let UserId = req.UserId
  let id = req.params.id
  Image.findByPk(id)
    .then(image => {
      if (image) {
        if (image.UserId == UserId) {
          next()
        } else {
          throw ({ name: 401, message: 'unauthorize' })
        }
      } else {
        throw ({ name: 404, message: 'not found'})
      }
    })
    .catch(err => {
      console.log(err)
      //next(err)
    })
}

module.exports = { authenticate, authorize }