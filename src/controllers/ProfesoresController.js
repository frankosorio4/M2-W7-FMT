const Profesor = require('../models/Profesor')
const { Op, fn, col } = require('sequelize')

class ProfesoresController {

    async criar(request, response) {
        try {
            // validation of required fields not empty
            const dados = request.body

            if (!dados.nome || !dados.email) {
                return response.status(400).json({ mensagen: 'Os campos nome e email do profesor são obrigatorios' })
            }

            //validating email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(dados.email)) {
                return response.status(400).json({ mensagem: 'Email inválido.' });
            }

            const profesor = await Profesor.create({
                nome: dados.nome,
                email: dados.email
            })
            return response.status(201).json(profesor)
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async listar(request, response) {

        const filtros = request.query;
        const whereClause = {};

        if (filtros.nome) {
            whereClause.nome = { [Op.iLike]: `%${filtros.nome}%` };
        }
        if (filtros.email) {
            whereClause.email = parseInt(filtros.email, 10);
        }

        try {
            if (filtros.nome || filtros.email) {
                const profesores = await Profesor.findAll({
                    where: {
                        [Op.or]: whereClause
                    }
                    //If we need a specific search where the two query params are true
                    // where: {
                    //     [Op.and]: whereClause
                    // }
                })

                if (profesores.length === 0){
                    return response.status(404).json({mensagem: "Profesor não encontrado"})
                }
                return response.status(200).json(profesores)
            } else {
                const profesores = await Profesor.findAll()
                return response.status(200).json(profesores)
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async editar(request, response) {
        try {
            const profesorId = request.params.id
            const dados = request.body
            console.log(dados)

            if (!dados.nome && !dados.email) {
                return response.status(400).json({ mensagen: 'Os campos nome e email do profesor são obrigatorios' })
            }

            //validating email format
            if(dados.email){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(dados.email)) {
                    return response.status(400).json({ mensagem: 'Email inválido.' });
                }
            }

            const profesor = await Profesor.findByPk(profesorId)
            if (!profesor) {
                return response.status(404).json({ mensagem: 'Profesor não encontrado' })
            }

            profesor.nome = dados.nome ?? profesor.nome
            profesor.email = dados.email ?? profesor.email

            await profesor.save()
            return response.json(profesor)
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' })
        }
    }

    async apagar(request, response) {
        try {
            const profesorId = request.params.id;

            const profesor = await Profesor.findByPk(profesorId);

            if (!profesor) {
                return response.status(404).json({ mensagem: 'Profesor não encontrado' });
            }

            await profesor.destroy();

            return response.status(200).json({ mensagem: 'Profesor excluído com sucesso' });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }
}

module.exports = new ProfesoresController()