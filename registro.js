if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/registro.html'))
})
router.delete('/registro', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/homepage2.html'))
})

module.exports =   router
