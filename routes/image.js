const router = require('express').Router()
const ImageController = require('../controller/imageController')
// const ImageController = require('../controller/imageController')

// router.get('/')
router.get('/favorite', ImageController.getAll)
// router.post('/favorite', )
// router.delete('/favorite/:id', )



module.exports = router