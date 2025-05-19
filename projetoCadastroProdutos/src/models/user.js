const db = require('./connection')

const saveUser = async (data) => {
  const query = `INSERT INTO users(nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)`
  console.log(data)
  // db.run(query, data)
}

const deleteUser = () => {}

const UpdateUser = () => {}

const showUser = () => {}