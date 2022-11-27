const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
router.get('/comoFunciona', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/comoFunciona.html'))
})
router.post('/comoFunciona', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/comoFunciona.html'))
})
router.delete('/comoFunciona', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/comoFunciona.html'))
})
router.put('/comoFunciona', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/comoFunciona.html'))
})

module.exports = router