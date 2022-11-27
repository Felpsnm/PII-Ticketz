const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
router.get('/eventos', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/eventos.html'))
})
router.post('/eventos', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/eventos.html'))
})
router.delete('/eventos', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/eventos.html'))
})
router.put('/eventos', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/eventos.html'))
})

module.exports = router