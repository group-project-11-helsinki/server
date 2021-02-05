const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)
router.get('/quotes', UserController.quotes)

module.exports = router