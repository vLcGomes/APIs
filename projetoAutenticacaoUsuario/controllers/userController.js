require('dotenv').config()
const { getTasksCollection } = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
  try {
    const createdAt = new Date(Date.now())
    const tasks = getTasksCollection()
    console.log(req.body.password)
    const password = req.body.password.toString()
    const hashedPassword = await bcrypt.hash(password, 10)

    await tasks.insertOne({username: req.body.username, password: hashedPassword, createdAt})
    res.status(200).json({
      msg: 'Task Adicionada!'
    })
  } catch (e) {
    res.status(500).json({msg: e})
  }
}

exports.loginUser = async (req, res) => {
  try {
    const tasks = getTasksCollection()
    const userInformations = await tasks.find({username: req.body.username}).toArray()
    const password = req.body.password.toString()

    if(!userInformations) {
      return res.status(404).json({msg: 'Usuário não encontrado!'})
    }

    const validPassword = await bcrypt.compare(password, userInformations[0].password)

    if(!validPassword) {
      return res.status(401).json({msg: 'Usuário ou senha incorretos.'})
    }

    try {

      const secret = process.env.SECRET_KEY

      const token = jwt.sign({
        id: userInformations._id
      }, 
      secret
      )

      return res.status(200).json({
        msg: 'Usuário logado!', 
        token 
      })
      
    } catch (e) {
      console.log(e)

      return res.status(500).json({msg: 'Erro no Servidor!'})
    }
  } catch (e) {
    return res.status(500).json({msg: 'Erro no Servidor!'})
  }
}