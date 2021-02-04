const router = require('express').Router()
const ImageController = require('../controller/imageController')

// router.get('/')
router.get('/favorite', ImageController.getAll)
router.post('/favorite', ImageController.addImage)
// router.delete('/favorite/:id', )



module.exports = router