const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
router.get('/evento', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/evento.html'))
})
router.post('/evento', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/evento.html'))
})
router.delete('/evento', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/evento.html'))
})
router.put('/evento', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/eventos.html'))
})

module.exports = router