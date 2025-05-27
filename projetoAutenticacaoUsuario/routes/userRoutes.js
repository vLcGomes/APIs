const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')

router.post('/register')
router.post('/login')

router.get('/profile')
router.patch('/profile')

module.exports = router