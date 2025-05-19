const express = require('express')
const router = express.Router()
const validateFields = require('./middlewares/validateFields')

router.get('/home', (req, res) => {
  res.status(200).render('index')
})

router.get('/login', (req, res) => {
  res.status(200).render('login')
})
router.post('/login', (req, res) => {})

router.get('/register', (req, res) => {
  res.status(200).render('register')
})

router.post('/register',validateFields.emptyOrNot, (req, res) => {
  res.send('teste')
  // saveUser
  // res.status(200).redirect('/home')
})

module.exports = router