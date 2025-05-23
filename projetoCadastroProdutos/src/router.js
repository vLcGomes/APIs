const express = require('express')
const router = express.Router()
const session = require('express-session')

const validateFields = require('./middlewares/validateFields')
const validateCredentails = require('./middlewares/validateCredentials')

const userModel = require('./models/userModel')
const productModel = require('./models/productModel')

// HOME
router.get('/home', (req, res) => {
  res.status(200).render('index')
})

// LOGIN
router.get('/login', (req, res) => {
  res.status(200).render('login')
})
router.post('/login', validateCredentails.loginUser)

// PASSWORD RECOVER
router.get('/login/recover', (req, res) => {
  res.status(200).render('recover') // Criar page RECOVER
})
router.post('/login/recover', (req, res) => {
  
})

// PRODUCT REGISTER
router.get('/product', (req, res) => res.status(200).render('product'))
router.post('/product', productModel.saveProduct)

// USER REGISTER
router.get('/register', (req, res) => {
  res.status(200).render('register')
})
router.post('/register', 
  validateFields.emptyOrNot,
  userModel.saveUser,
  (req, res) => {
    res.render('login')
  }
)

module.exports = router