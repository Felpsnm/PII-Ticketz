if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const login = require('./login')
const registro = require('./registro')
const comoFunciona = require('./comoFunciona')
const criarAnuncio = require('./criarAnuncio')
const evento = require('./evento')
const eventos = require('./eventos')
const home = require('./home')
const perfil = require('./perfil')
const router = express.Router()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const path = require('path')
const engines = require('consolidate');
const vendedor = require('./backend/vendedor');
const server1 = require('./server1')
const data = require('./dataBase')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
app.use(comoFunciona)
app.use(criarAnuncio)
app.use(evento)
app.use(eventos)
app.use(perfil)
app.use(home)
app.use(login.router)
app.use(registro)
app.use(vendedor)
app.use(server1)
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use('/', router);
app.set('views', __dirname + '/views');
app.set('view engine', 'html')
app.engine('html', engines.mustache);
app.listen(5000);