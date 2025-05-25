
const { getTasksCollection } = require('../config/db')

exports.createNewTask = async (req, res) => {
  try {
    req.body.createAt = new Date(Date.now())
    const tasks = getTasksCollection()
    const newTask = await tasks.insertOne(req.body)
    res.status(200).json({
      msg: "Task adicionada!"
    })
  } catch (e) {
    res.status(500).json({
      msg: 'Ocorreu um erro no servidor durante o salvamento, Tente novamente.'
    })
  }
}

exports.showAllTasks = async (req, res) => {
  try {
    const tasks = getTasksCollection()
    const allTasks = await tasks.find().toArray()
    res.status(200).json(allTasks)
  } catch (e) {
    res.status(500).json({
      msg: 'Ocorreu um erro no servidor durante a busca!'
    })
  }
}