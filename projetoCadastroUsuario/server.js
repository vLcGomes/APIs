const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db.sqlite')

function saveUser() {
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS teste(username TEXT, email TEXT, password TEXT)')
  
  db.run("INSERT INTO teste (username, email, password) VALUES (?, ?, ?)", ['USERNAME', 'EMAIL', 'PASSWORD'])
  })
}
saveUser()

// app.use(cors())
// app.use('/teste', (req, res) => {
//   res.send('teste')
// })

// app.listen(3030, () => {
//   console.log('Executando...')
// })