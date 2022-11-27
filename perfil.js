
const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
router.get('/perfil', function (req, res) { 
    res.sendFile(path.join(__dirname, 'public/html/perfil.html'))
})
router.post('/perfil', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/perfil.html'))
})
router.delete('/perfil', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/perfil.html'))
})
router.put('/perfil', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/perfil.html'))
})
module.exports = router

