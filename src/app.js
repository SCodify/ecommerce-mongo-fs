const express = require('express')
const router = require('./router')
const handlebars = require('express-handlebars')//handlebars
const mongoConnect = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))//handlebars

app.engine('handlebars', handlebars.engine())//handlebars
app.set('views', __dirname + '/views')//handlebars

mongoConnect()

router(app)

module.exports = app