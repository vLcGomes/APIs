
function emptyOrNot(req, res, next) {
  const { nome, sobrenome, email, senha } = req.body
  
  if(!nome) return
  if(!sobrenome) return 
  if(!email) return 
  if(!senha) return
  if(nome === '') return
  if(sobrenome === '') return
  if(email === '') return
  if(senha === '') return
  // next()
}

module.exports = {
  emptyOrNot,
}