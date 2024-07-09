const {Router} = require('express')
//importing the model that contains the table
const Responsavel = require('../models/Responsavel')
//importing functions from controllers
const ResponsavelController = require('../controllers/ResponsavelController')

const responsaveisRoutes = new Router()

//list all the functions
// we put all the functions in a file inside of the folder controllers
// this functions are created inside of a class
responsaveisRoutes.post('/',ResponsavelController.criar)
responsaveisRoutes.get('/',ResponsavelController.listar)
responsaveisRoutes.get('/',ResponsavelController.listarUm)
responsaveisRoutes.put('/',ResponsavelController.editar)
responsaveisRoutes.delete('/',ResponsavelController.apagar)

module.exports = responsaveisRoutes