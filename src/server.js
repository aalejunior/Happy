const express = require('express');
const path = require('path');
const { orphanage } = require('./pages.js');
const pages = require('./pages.js')

//iniciando o express
const server = express()
server

//usar o corpo da requisição
.use(express.urlencoded({extended: true}))

.use(express.static('public'))


//confirugando a tamplate engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')


//rotas da aplição
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)




//ligando o servidor 
server.listen(5500)