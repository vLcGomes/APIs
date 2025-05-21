const db = require('./connection')

const saveUser = async (req, res, next) => {
  const query = `INSERT INTO users(nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)`
  const { nome, sobrenome, email, senhaHash } = req.body

  db.run(query, [nome, sobrenome, email, senhaHash])
  next()
}

const deleteUser = (req, res, next) => {
  const query = `DELETE FROM users WHERE id = (?)`
  const id = req.body.id

  db.run(query, id)
  next()
}

const UpdateUser = (req, res, next) => {
  const query = `UPDATE users SET name = (?), sobrenome = (?), email = (?)`

  const { nome, sobrenome, email} = req.body

  db.run(query, [nome, sobrenome, email])
  next()
}

const showUser = (req, res, next) => {
  if(req.body.id) {
    const query = `SELECT * FROM users WHERE id = (?)`
    
    db.run(query, id)
    next()
  }
  const query = `SELECT * FROM users`

  db.run(query)
  next()
}

module.exports = {
  saveUser,
}