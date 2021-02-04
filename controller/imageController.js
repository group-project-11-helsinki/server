const {Image} = require('../models')

class ImageController {
  static getAll (req, res, next) {
    const UserId = req.UserId
    // const UserId = 1
    Image.findAll({
      where: {
        UserId
      }
    }).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      next(err)
    })
  }
}

module.exports = ImageController