const express = require('express')
const bodyparser = require('body-parser')

const qcmRouter = require('./app/route/qcmRouter')

const app = express()
app.use(express.json())

app.set('view engine', "ejs")
app.set('views', './app/views')

app.use('/public', express.static("./public"))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/qcm', qcmRouter)

module.exports = app