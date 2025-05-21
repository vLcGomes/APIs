const db = require('./connection')

function userExists(req, res, next) {
  const query = `SELECT email, senha from users WHERE email = (?)`

  const { email, senha } = db.run(query, req.body.email)

  return email, senha
}