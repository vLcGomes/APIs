const db = require('../models/connection')
const bcrypt = require('bcrypt')

function loginUser(req, res) {

  const { email, senha, senhaHash } = req.body


  if (!email || !senha) {
    return res.status(400).render('login', { error: 'Email e senha são obrigatórios' });
  }

  const query = `SELECT email, senha from users WHERE email = ?`
  
  db.get(query, [email], (err, row) => {
    if(err) {
      console.error(err)
      return res.status(500).render('login', { error: 'Erro interno do servidor'})
    }

    if(!row) {
      return res.status(401).render('login', { error:'Email ou senha inválidos' })
    }

    bcrypt.compare(senha, row.senha, (err, result) => {
      if(err) {
        return res.status(500).render('login', { error: 'Erro ao verificar a senha'})
      }

      if(!result) {
        return res.status(401).render('login', { error: 'Email ou senha inválidos'})
      }

      return res.status(200).render('index', { message: 'login realizado com sucesso!'})
    })
  })
}

module.exports = { loginUser }