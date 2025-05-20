const express = require('express')
const router = express.Router()
const validateFields = require('./middlewares/validateFields')
const userModel = require('./models/userModel')

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

router.post('/register', 
  validateFields.emptyOrNot,
  // SE retornar 200 rederizo '''isso''', senao renderizo ""isso"" usar redirect e criar uma página para capos invalidos
  userModel.saveUser,

)

module.exports = router