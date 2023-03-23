const questions = [
    {
        id:1,
        question: 'Qui est Finoana',
        choix: [
            "Etudiant L1G1",
            "Etudiant L2RSI",
            "Etudiant L1G2",
            "Etudiant L2IDEV",
        ],
        reponse: 'Etudiant L2IDEV'
    },
    {
        id:2,
        question: 'Qui est Kevin',
        choix: [
            "Etudiant L1G2",
  
            "Etudiant L2IDEV",
            "Etudiant L1G1",
        ],
        reponse: 'Etudiant L2IDEV'
    },
    {
        id:3,
        question: 'Qui est Mario',
        choix: [
        
            "Etudiant L2IDEV",
            "Etudiant L2RSI",
            "Etudiant L1G1",
        ],
        reponse: 'Etudiant L2IDEV'
    },
    {
        id:4,
        question: 'Qui est Mirasoa',
        choix: [
            "Etudiant L2RSI",
            "Etudiant L1G2",
            "Etudiant L2IDEV",
        ],
        reponse: 'Etudiant L2IDEV'
    },
    {
        id:5,
        question: 'Qui est Eliot',
        choix: [
            "Etudiant L1G1",
            "Etudiant L1G2",
            "Etudiant L2RSI",
            "Etudiant L2IDEV",
        ],
        reponse: 'Etudiant L2IDEV'
    },
    {
        id:6,
        question: 'Qui sont gens',
        choix: [
            "membre Iteam-s",
            "membre blockbuster"
        ],
        reponse: 'membre blockbuster'
    }
]

exports.index = (req, res, next) => {
    let id = req.params.id
    let question = questions[id]
    let data = "" 
        question.choix.map((rep) => {
            data += "<input type='radio' name='choix'  value='"+rep+"' >" + rep + "<br>"
        }) 
    res.render('index',{
        id: id,
        titre: 'QCM',
        question: question.question,
        reponse: question.reponse,
        data: data
    })
next()
}

exports.storeIndex1 = (req, res, next) => {
    const id = parseInt(req.body.id)
    let newId = parseInt(req.body.id) +1
    quest = questions[id]
    if(req.body.choix == quest.reponse){
        res.redirect('question/'+parseInt(newId))
    } else {
        res.redirect('question/'+req.body.id)
    }
next()
}


