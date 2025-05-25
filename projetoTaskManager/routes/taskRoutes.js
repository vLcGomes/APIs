const express = require('express')
const router = express.Router()
const taskConttroller = require('../controllers/taskControllers')

router.get('/', taskConttroller.showAllTasks)
router.post('/', taskConttroller.createNewTask)
router.delete('/', taskConttroller.deleteTask)
router.patch('/', taskConttroller.updateOneInformation)

module.exports = router