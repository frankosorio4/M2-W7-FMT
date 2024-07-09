//file to redirect to the rotes in the folder routes
// importing from routes name.routes
const { Router } = require('express')
const responsaveisRoutes = require('./responsaveis.routes')

//start a router to redirect to the differents files
const routes = new Router()

// list the routes here. WE HAVE ONLY ONE
routes.use('/responsaveis', responsaveisRoutes)

module.exports = routes

//example with RESPONSAVEIS
// http://localhost:3000/responsaveis/
// {
//     "nome": "frank",
//     "idade": 37,
//     "email": "frank@email.com",
//     "senha": "12345",
//     "sexo": "Masculino"
//  }