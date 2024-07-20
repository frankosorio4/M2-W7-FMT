const { Router } = require('express')
const cursosRoutes = require('./cursos.routes')
const profesoresRoutes = require('./profesores.routes')

const routes = new Router()

routes.use('/cursos', cursosRoutes)
routes.use('/profesores', profesoresRoutes)

module.exports = routes