const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskControllers')

router.get('/', taskController.showAllTasks)
router.post('/', taskController.createNewTask)
router.delete('/', taskController.deleteTask)
router.patch('/', taskController.updateOneInformation)

module.exports = router