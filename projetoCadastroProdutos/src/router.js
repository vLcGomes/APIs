const express = require('express')
const router = express.Router()
const session = require('express-session')

const validateFields = require('./middlewares/validateFields')
const validateCredentails = require('./middlewares/validateCredentials')
const userModel = require('./models/userModel')
const productModel = require('./models/productModel')

router.get('/home', (req, res) => {
  res.status(200).render('index')
})

router.get('/login', (req, res) => {
  res.status(200).render('login')
})

router.post('/login', validateCredentails.loginUser)

router.get('/login/recover', (req, res) => {

})

router.post('/login/recover', (req, res) => {
  
})

router.get('/register', (req, res) => {
  res.status(200).render('register')
})


router.get('/product', (req, res) => res.status(200).render('product'))
router.post('/product', productModel.saveProduct, (req, res) => res.json({ mensagem: 'Produto Cadastrado!'}))

router.post('/register', 
  validateFields.emptyOrNot,
  userModel.saveUser,
  (req, res) => {
    res.render('login')
  }
)

module.exports = router