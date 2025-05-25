const Task = require('../models/taskModel')

exports.createNewTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body)
    res.status(200).json({
      msg: "Task adicionada!",
      newTask
    })
  } catch (e) {
    res.status(500).json({
      msg: 'Ocorreu um erro no servidor durante o salvamento, Tente novamente.'
    })
  }
}

exports.showAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find()
    res.status(200).json(allTasks)
  } catch (e) {
    res.status(500).json({
      msg: 'Ocorreu um erro no servidor durante a busca!'
    })
  }
}