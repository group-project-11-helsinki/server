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