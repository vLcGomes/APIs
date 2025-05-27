const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { connection } = require('./config/db')

app.use(express.json())
app.use('./api/users', require('./router/userRoutes.js'))

connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
})