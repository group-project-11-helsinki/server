const router = require('express').Router()
const ImageController = require('../controller/imageController')
const { authenticate , authorize} = require("../middleware/auth")

// router.get('/')
router.use(authenticate)
router.post('/favorite', ImageController.addImage)

router.use("/", authorize)
router.get('/favorite', ImageController.getAll)
router.delete('/favorite/:id', ImageController.deleteImage)



module.exports = router