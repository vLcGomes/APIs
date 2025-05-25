require('dotenv').config()
const express = require('express')
const { connection } = require('./config/db')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/tasks', require('./routes/taskRoutes.js'))


connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
})