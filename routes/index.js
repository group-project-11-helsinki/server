const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const imageRoutes = require('./image')

router.use('/users', userRoutes)
router.use('/images', imageRoutes)

module.exports = router