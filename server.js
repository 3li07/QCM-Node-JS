const http = require('http')
const app = require('./app')


app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(process.env.PORT || 8080, () => {
    console.log('Serveur Demarre')
})
