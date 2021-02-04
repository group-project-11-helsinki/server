<<<<<<< HEAD
const { User } = require('../models')
=======
const {User} = require('../models')
>>>>>>> 0e2951757b5aac6bda9bab026b64fef111d7e6a2

class UserController {
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

<<<<<<< HEAD
module.exports = Controller;
=======
module.exports = Controller;
>>>>>>> 0e2951757b5aac6bda9bab026b64fef111d7e6a2
