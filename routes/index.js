const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const imageRoutes = require('./image')

router.use('/users', userRoutes)
<<<<<<< HEAD
router.use('/images', imageRoutes)
=======
>>>>>>> 93652c5d847cbb7d6cf96a6dd2d237924b432fd5

module.exports = router