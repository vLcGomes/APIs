const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db.sqlite')



function saveUser(usernameValue, emailValue, passwordValue) {
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS teste(username TEXT, email TEXT UNIQUE, password TEXT)')
  
    db.run("INSERT INTO teste (username, email, password) VALUES (?, ?, ?)", [usernameValue, emailValue, passwordValue])
  })
}


app.use(cors())
app.use(express.json())

app.post('/api', (req, res) => {
  try {
    saveUser(req.body.usernameValue, req.body.emailValue, req.body.passwordValue)
    
    return res.send()
  } catch (e) {
    return e
  }
})

app.listen(3030, () => {
  console.log('Executando...')
})