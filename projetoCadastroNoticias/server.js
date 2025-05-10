const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.post('http://localhost.com:3000/register', (req, res) => {
  return
})

app.listen(3000, () => {
  console.log('Executando...')
})