const express = require('express');
const path = require('path');


//iniciando o express
const server = express()
server
.use(express.static('public'))

//criando uma rota
.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views','index.html'))
})

//ligando o servidor 
server.listen(5500)