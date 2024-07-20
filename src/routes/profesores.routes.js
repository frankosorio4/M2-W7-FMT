const {Router} = require('express');
const ProfesoresController = require('../controllers/ProfesoresController');


const profesoresRoutes = new Router();

//list all the functions
profesoresRoutes.post('/', ProfesoresController.criar);
profesoresRoutes.get('/', ProfesoresController.listar)
profesoresRoutes.put('/:id', ProfesoresController.editar)
profesoresRoutes.delete('/:id', ProfesoresController.apagar)

module.exports = profesoresRoutes

//POST
// http://localhost:3000/profesores/
// {
//     "nome": "deletar2",
//     "email": "frank@email.com"
// }
