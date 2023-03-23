require ('dotenv').config()
const http = require('http')
const app = require('./app')


app.set('port', process.env.PORT);
http.createServer(app).listen(process.env.PORT || 8080, () => {
    console.log('Serveur Demarre')
})
