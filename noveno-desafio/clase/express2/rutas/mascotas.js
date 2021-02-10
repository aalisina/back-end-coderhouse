var express = require('express')
var router = express.Router()


router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
  res.send('Hola soy una mascota')
})

router.get('/nombre', function (req, res) {
  res.send('Soy Firulais')
})

module.exports = router