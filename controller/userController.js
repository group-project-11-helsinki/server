<<<<<<< HEAD
const {User} = require('../models')
class UserController {
  
}

module.exports = UserController
=======
const { User } = require()

class Controller {
  static register(req, res) {
    const { email, password } = req.body
    const newUser = { email, password }
    User.create(newUser)
    .then(user => {
      res.status(200).json({
        message: 'Register success',
        email: user.email
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'internal server error'
      })
    })
  }
}

module.exports = Controller;
>>>>>>> 93652c5d847cbb7d6cf96a6dd2d237924b432fd5
