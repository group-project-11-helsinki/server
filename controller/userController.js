const {User} = require('../models')
const { comparePass } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");
const { OAuth2Client } = require('google-auth-library');
const axios = require("axios")

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
      next(err)
    })
  }

  static async login(req, res, next) {
    const { email, password } = req.body
        try {
            const findUser = User.findOne({
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

  static googleLogin (req, res, next) {
    const idToken = req.body.idToken
    const client = new OAuth2Client(process.env.CLIENT_ID)
    let email
    client.verifyIdToken({
      idToken,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload()
        email = payload.email
        return User.findOne({ where: { email: email }})
      })
      .then(user => {
        if (user) {
          let payload = {
            id: user.dataValues.id,
            email: user.dataValues.email
          }
          const access_token = generateToken(payload)
          req.headers.access_token = access_token
          res.status(200).json({ access_token })
        } else {
          let password = process.env.PASSWORD_FILLER
          return User.create({ email, password })
        }
      })
      .then(user => {
        if (user) {
          let payload = {
            id: user.id,
            email: user.id
          }
          const access_token = generateToken(payload)
          req.headers.access_token = access_token
          res.status(201).json({ access_token })
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static quotes(req, res, next) {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      res.status(200).json(response.data.slip.advice)
    }).catch(err => {
      next(err)
    })
  }
}

module.exports = UserController;
