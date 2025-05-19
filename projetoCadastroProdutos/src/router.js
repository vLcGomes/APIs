const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
  res.status(200).render('index')
})

router.get('/login', (req, res) => {
  res.status(200).render('login')
})
router.post('/login', (req, res) => {validadeFields})

router.get('/register', (req, res) => {
  res.status(200).render('register')
})

module.exports = router