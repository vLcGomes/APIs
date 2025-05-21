function test(req, res, next) {
  const { email, senha } = userExists()
  if(req.body.email === email && req.body.senha === senha) {
    const correctInfo = true
    return correctInfo
  }
  const correctInfo = false
  return correctInfo
}