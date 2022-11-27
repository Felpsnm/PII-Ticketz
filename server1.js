const express = require('express')
const router = express.Router()
const path = require('path')

// REQUISIÇÕES PÓS LOGIN
router.get('/comoFunciona1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/comoFunciona1.html'))
})
router.post('/comoFunciona1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/comoFunciona1.html'))
})
router.delete('/comoFunciona1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/comoFunciona1.html'))
})
router.put('/comoFunciona1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/comoFunciona1.html'))
})
router.get('/evento1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/evento1.html'))
})
router.post('/evento1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/evento1.html'))
})
router.delete('/evento1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/evento1.html'))
})
router.put('/evento1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/eventos1.html'))
})
router.get('/eventos1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/eventos1.html'))
})
router.post('/eventos1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/eventos1.html'))
})
router.delete('/eventos1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/eventos1.html'))
})
router.put('/eventos1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/eventos1.html'))
})
router.get('/homepage1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/homepage1.html'))
})
router.post('/homepage1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/homepage1.html'))
})
router.delete('/homepage1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/homepage1.html'))
})
router.put('/homepage1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/homepage1.html'))
})
router.get('/perfil1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/perfil1.html'))
})
router.post('/perfil1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/perfil1.html'))
})
router.delete('/perfil1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/perfil1.html'))
})
router.put('/perfil1', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/perfil1.html'))
})
router.get('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/vendedor1.html'))
})
router.post('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/vendedor1.html'))
})
router.delete('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/vendedor1.html'))
})
router.put('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login/vendedor1.html'))
})
router.get('/meusAnuncios', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/meuAnuncio.html'))
})
router.post('/meusAnuncios', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/meuAnuncio.html'))
})
router.delete('/meusAnuncios', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/meuAnuncio.html'))
})
router.put('/meusAnuncios', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/meuAnuncio.html'))
})

module.exports = router