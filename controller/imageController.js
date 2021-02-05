const {Image} = require('../models')
const axios = require("axios")
const { response } = require('express')

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

  static showAllImage(req, res, next) {
    axios.get(`https://api.unsplash.com/photos/random/?count=20&client_id=${process.env.API_KEY}`)
    .then(response => {
      let arr = response.data.map((element) => element.urls.small)
      res.status(200).json(arr)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }

  
}

module.exports = ImageController