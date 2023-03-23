const express = require('express')
const route = express.Router()
const qcmController = require('../controllers/qcm')

route.get('/question/:id', qcmController.index)
route.post('/storeqeust1', qcmController.storeIndex1)





module.exports = route