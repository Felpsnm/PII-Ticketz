const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const eventosDB = []
router.get('/criarAnuncio', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/criarAnuncio.html'))
})
router.post('/criarAnuncio', async (req, res) => {
    try {
        eventosDB.push({
            id: Date.now().toString(),
            eventoNome: req.body.eventoNome,
            quantidade: req.body.quantidade,
            ingresso: req.body.ingresso,
            tipos: req.body.tipos,
            eventoData: req.body.eventoData,
            eventoLocal: req.body.eventoLocal,
            notaExtra: req.body.notaExtra,
            categoria: req.body.categoria,
        })
        res.redirect('/homepage1')
    } catch {
        res.redirect('/criarAnuncio')
    }
    console.log(eventosDB)
})
router.delete('/criarAnuncio', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/criarAnuncio.html'))
})
router.put('/criarAnuncio', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/criarAnuncio.html'))
})

module.exports = router