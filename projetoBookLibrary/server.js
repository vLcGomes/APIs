require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
// const { connection } = require('./config/db.js')


app.use(express.json())
app.use('/api/books', require('./routes/userRoutes.js'))


app.listen(PORT, () => {
  console.log('Executando...')
})