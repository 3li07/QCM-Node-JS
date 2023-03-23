const express = require('express')
const bodyparser = require('body-parser')

const qcmRouter = require('./route/qcmRouter')

const app = express()
app.use(express.json())

app.set('view engine', "ejs")
app.set('views', './views')

app.use('/public', express.static("./public"))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/qcm', qcmRouter)


// app.get('/', (req,res) =>{
//     res.render('index',{titre: 'Exo Formulaire', nom: null, login: null, erreur: null})
// })

// app.post('/',(req,res) =>{
//     console.log(req.body)
//     if(req.body.mdp !== req.body.mdp_conf) {
//         res.render('index',{titre: 'Exo Formulaire', nom: req.body.nom, login: req.body.login, erreur: 'MOt de passe Incorect'})
//     }else {
//         res.render('welcome',{titre: 'Exo Formulaire', nom: req.body.nom})
//     }
// })

module.exports = app