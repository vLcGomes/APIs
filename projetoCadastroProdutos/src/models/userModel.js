const db = require('./connection')

const saveUser = async (req, res, next) => {
  const query = `INSERT INTO users(nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)`
  const { nome, sobrenome, email, senhaHash } = req.body
  
  db.run(query, [nome, sobrenome, email, senhaHash])
  next()
}

const deleteUser = () => {}

const UpdateUser = () => {}

const showUser = () => {}

module.exports = {
  saveUser,
}