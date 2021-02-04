const {User} = require('../models')

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

  static login(req, res, next) {
    const { email, password } = req.body
        try {
            const findUser = await User.findOne({
                where: {
                    email
                }
            })
            if (!findUser) {
                throw {name: 'LoginError', message: 'Invalid email or password'}
            } else {
                const result = comparePass(password, findUser.password)
                if (!result) {
                    throw {name: 'LoginError', message: 'Invalid email or password'}
                } else {
                    let payload  = {
                        id:findUser.id,
                        email:findUser.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({access_token: token})
                }
            }
        } catch(err) {
            next(err)
        }
  }
}

module.exports = UserController;
