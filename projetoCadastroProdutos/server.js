const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Executando...')
})