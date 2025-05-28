const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')
const authenticateToken = require('../middlewares/autheticateMiddleware')

router.post('/register', userControllers.createUser)
router.post('/login', userControllers.loginUser)

router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    msg: `Hello, ${req.body.username}`
  })
})


module.exports = router