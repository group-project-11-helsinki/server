const router = require('express').Router()
const ImageController = require('../controller/imageController')
const { authenticate , authorize} = require("../middleware/auth")

// router.use(authenticate)
router.get('/', ImageController.showAllImage)
router.post('/favorite', ImageController.addImage)

// router.use("/", authorize)
router.get('/favorite', ImageController.getAll)
router.delete('/favorite/:id', ImageController.deleteImage)



module.exports = router