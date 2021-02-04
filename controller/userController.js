const { User } = require('../models')

class Controller {
  static register(req, res, next) {
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
      // res.status(500).json({
      //   message: 'internal server error'
      // })
      console.log(err);
    })
  }
}

module.exports = Controller;