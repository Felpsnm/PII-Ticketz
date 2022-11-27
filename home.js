const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/homepage2.html'))
})
router.post('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/homepage2.html'))
})
router.delete('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/homepage2.html'))
})
router.put('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/homepage2.html'))
})

module.exports = router