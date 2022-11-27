const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/vendedor.html'))
})
router.post('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/vendedor.html'))
})
router.delete('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/vendedor.html'))
})
router.put('/vendedor', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/vendedor.html'))
})

module.exports = router