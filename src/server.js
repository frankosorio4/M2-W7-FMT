// Second file, configurations and importiing of libraries
// express: framework to comnicate with the frontend
// cors: to do validations and security
// routes: redirec to the file routes in the folder routes
// conection: to connect  with the configuration of the database in the file connection of the folder database
// APP_PORT: to use the enviroment variables (passwords and user names) saved in the .env file
const express = require("express")
const cors = require('cors')
const routes = require("./routes/routes")
const connection = require("./database/connection")
const APP_PORT = process.env.APP_PORT

class Server {
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    async middlewares(server) {
        console.log("Executando os middlewares")
        server.use(cors()) // Quando tiver em Produção Habilita os Cors
        server.use(express.json())
        console.log("Middlewares executados")
    }

    async database() {
        try {
            console.log("Conectando ao banco de dados")
            await connection.authenticate()
        } catch (error) {
            console.log("Erro ao conectar ao banco de dados: ", error)
        }
    }

    async initializeServer(server) {
        server.listen(APP_PORT, () => {
            console.log(`Servidor rodando na porta ${APP_PORT}!`)
        })
    }
}

module.exports = { Server }