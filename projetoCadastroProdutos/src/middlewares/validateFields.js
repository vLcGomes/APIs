const bcrypt = require('bcrypt')

async function emptyOrNot(req, res, next) {
  const { nome, sobrenome, email, senha } = req.body
  
  if(!nome) return res.status(400).json({ message: 'O campo Nome é obrigatório. Favor Preenche-lo!' });
  if(nome === '') return res.status(400).json({ message: 'O campo Nome é obrigatório. Favor Preenche-lo com um valor válido!' });

  if(!sobrenome) return res.status(400).json({ message: 'O campo "Sobrenome" é obrigatório. Favor Preenche-lo!' });
  if(sobrenome === '') return res.status(400).json({ message: 'O campo "Sobrenome" é obrigatório. Favor Preenche-lo com um valor válido!' });

  if(!email) return res.status(400).json({ message: 'O campo "email" é obrigatório. Favor Preenche-lo!' });
  if(email === '') return res.status(400).json({ message: 'O campo "Email" é obrigatório. Favor Preenche-lo com um valor válido!' });

  if(!senha) return res.status(400).json({ message: 'O campo "Senha" é obrigatório. Favor Preenche-lo!' });
  if(senha === '') return res.status(400).json({ message: 'O campo "Senha" é obrigatório. Favor Preenche-lo com um valor válido!' });

  const senhaHash = await bcrypt.hash(senha, 10)
  req.body = {
    nome, sobrenome, email, senhaHash
  }

  next()
}

module.exports = {
  emptyOrNot,
}