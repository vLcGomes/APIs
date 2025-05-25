const express = require('express')
const router = express.router()
const taskConttroller = require('../controllers/taskControllers')

router.get('/', taskConttroller.showAllTasks)
router.post('/', taskConttroller.createNewTask)

module.exports = router