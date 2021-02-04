const express = require('express')
const router = express.Router()
const Controller = require('../controller/userController')

router.post('/register', Controller.register)
router.post('/login', )

module.exports = router