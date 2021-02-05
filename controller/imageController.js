const {Image} = require('../models')
const axios = require("axios")
const { response } = require('express')

class ImageController {
  static getAll (req, res, next) {
    const UserId = req.UserId
    Image.findAll({
      where: {
        UserId
      }
    }
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
    axios.get(`https://api.unsplash.com/photos/random/?count=21&client_id=${process.env.API_KEY}`)
    .then(response => {
      // console.log(response.urls.small)
      let arr = response.data.map((element) => element.urls.small)
      res.status(200).json(arr)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static coronaData(req, res, naxt) {
    axios.get('https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia')
    .then(response => {
      let dataCovid = {
        confirmed: response.data.All.confirmed,
        recovered: response.data.All.recovered,
        deaths: response.data.All.deaths,
        country: response.data.All.country
      }
      res.status(200).json(dataCovid)
      console.log(datacovid);
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static quotes(req, res, next) {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      res.status(200).json(response.data)
    }).catch(err => {
      next(err)
    })
  }
}

module.exports = ImageController