const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')
const authenticateToken = require('../middlewares/autheticateMiddleware')

router.post('/register')
router.post('/login')

router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    msg: `Hello, ${req.user.username}`
  })
})


module.exports = router