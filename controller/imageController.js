const {Image} = require('../models')

class ImageController {
  static getAll (req, res, next) {
    const UserId = req.UserId
    Image.findAll(
    ).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      next(err)
    })
  }

  static addImage(req, res, next) {
    const UserId = req.UserId
  
    const { imageUrl } = req.body;

    const newImage = {
      imageUrl,
      UserId
    }

    Image.create(newImage)

    .then(data => {
      res.status(201).json({data})
    })

    .catch(err => {
      next(err)
    })
  }

  static deleteImage(req, res ,next) {
    const id = req.params.id;

    Image.destroy({
      where: {
        id
      }
    })
    .then(data => {
      res.status(200).json({message: "success delete image"})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = ImageController