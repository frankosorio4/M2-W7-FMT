const {Router} = require('express')
const Curso = require('../models/Curso')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = new Router()

//list all the functions
cursoRoutes.post('/',CursoController.criar)
cursoRoutes.get('/',CursoController.listar)
// cursoRoutes.get('/',CursoController.listarUm)
// cursoRoutes.put('/',CursoController.editar)
// cursoRoutes.delete('/',CursoController.apagar)

module.exports = cursoRoutes

//POST
// http://localhost:3000/cursos/
// {
//     "nome": "matematica 1",
//     "horas": 50
//  }

