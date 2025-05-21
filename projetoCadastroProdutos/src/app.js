const express = require('express')
const app = express()
const router = require('./router')
const ejs = require('ejs')
const path = require('path')
const session = require('express-session')

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(session({ secret: "ecommerce" }))
app.use(router)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'views'))

module.exports = app;