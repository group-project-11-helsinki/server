const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const UserController = require('../controller/userController')


// router.post('/registrasi', )
// router.post('/login', )
=======
const Controller = require('../controller/userController')

router.post('/register', Controller.register)
router.post('/login', )
>>>>>>> 93652c5d847cbb7d6cf96a6dd2d237924b432fd5

module.exports = router