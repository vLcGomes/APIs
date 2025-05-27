const { getTasksCollection } = require('../config/db')

exports.createUser = async (req, res) => {
  try {
    req.body.createAt = new Date(Date.now())
    const tasks = getTasksCollection()
    const newTask = await tasks.insertOne(req.body)
    res.status(200).json({
      msg: 'Task Adicionada!'
    })
  } catch (e) {
    res.status(500).json({msg: e})
  }
}