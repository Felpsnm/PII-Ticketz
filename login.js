const express = require('express')
const router = express.Router()
const path = require('path')
const passport = require('passport')
const initializePassport = require('./passport-config')
const bcrypt = require('bcrypt')

var users = [{
    id: '1668128397767',
    name: 'projetoTicketz',
    email: 'projetoTicketz@gmail.com',
    password: '$2b$10$LxnfQF4pD4oAhGdd1rCwNefKF.7GT1QAvrrJAD7KqwFh8Myn8U0NW'
}, {id: '1668128397769',
    name: 'teste',
    email: 'teste@gmail.com',
    password: '$2b$10$Xu7OnYaqS8j.IxIYPjfLw.0p6UwL2KnWgVJOdzTiMwczcnmY83JW6'
}]
router.post('/registro', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        var nome = req.body.name
        var senha = req.body.password
        if (nome.length >= 5 && nome.length <= 15 && senha.length >= 8 && senha.length <= 24 && senha !== senha.toUpperCase() && senha !== senha.toLowerCase()) {
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                socialmedia: req.body.socialmedia,
                password: hashedPassword,
            })
            res.redirect('/login')
        }
        else {
            res.redirect('/registro')
        }
    } catch {
        res.redirect('/registro')
    }
    console.log(users)
})
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/login.html'))
})
router.delete('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/login..html'))
})
router.put('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/login..html'))
})
router.post('/login', passport.authenticate('local', {
    successRedirect: '/homepage1',
    failureRedirect: '/login',
    failureFlash: true
}))
initializePassport(
    passport,
    email =>
        users.find(user => user.email === email),
    id => users.find(user => user.id === id))


module.exports = {
    router,
    users
}