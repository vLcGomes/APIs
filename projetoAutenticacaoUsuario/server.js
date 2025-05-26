const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use('./api/users', require('./router/userRoutes.js'))

app.listen(PORT, () => {
  console.log('Executando...')
})