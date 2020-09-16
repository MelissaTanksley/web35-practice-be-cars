const router = require('express').Router()
const colors = require('colors')
const Car = require('../models/Cars.js')

let currentTime = new Date().toLocaleString()

// @desc:   Test router
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send(`GET for Car /test is currently running ${currentTime}`)
})

// @desc:   Get all cars
// @route:  GET /
router.get('/', (req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Add new cars
// @route:  POST /add
router.post('/add', (req, res) => {
  const newCar = new Car({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    mileage: req.body.mileage,
  })

  newCar
    .save()
    .then(() => res.json(newCar))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
