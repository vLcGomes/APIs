require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const { connection } = require('./config/db')

app.use(express.json())
app.use('/api/users', require('./routes/userRoutes.js'))

connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
})