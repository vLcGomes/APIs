const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db.sqlite3')

function saveNews(title, text, category) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('CREATE TABLE IF NOT EXISTS news (title text, content TEXT, category text,date DATETIME DEFAULT CURRENT_TIMESTAMP)')

      const stmt = db.prepare("INSERT INTO news (title, content, category) VALUES (?, ?, ?)")
      
      stmt.run([title, text, category], err => {
        if(err) {
          reject(err)
        }
      })
      stmt.finalize()
    })
  }
)}

app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  const title = req.body.title
  const text = req.body.text
  const category = req.body.category

  saveNews(title, text, category)
    .then(() => {
      res.status(200).json({ success: true, message: 'Notícia salva com sucesso!' });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: 'Erro ao salvar a notícia', error: err.message });
    });
  })
  

app.get('/home', async (req, res) => {
  const sql = 'SELECT * from news'
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ erro: err.message })
      return
    }
    res.json(rows)
  })
})

app.listen(3000, () => {
  console.log('Executando...')
})