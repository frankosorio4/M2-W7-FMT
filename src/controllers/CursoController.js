const Curso = require('../models/Curso')
const { Op, fn, col } = require('sequelize')

class CursoController {

    async criar(request, response) {
        try {
            // validation of required fields not empty
            const dados = request.body

            if (!dados.nome || !dados.horas) {
                return response.status(400).json({ mensagen: 'Os campos nome e horas do curso são obrigatorios' })
            }

            //validating horas
            if (typeof dados.horas != 'number' || dados.horas < 0) {
                return response.status(400).json({ mensagen: 'A idade tem que ser um numero inteiro positivo' })
            }

            const curso = await Curso.create({
                nome: dados.nome,
                horas: dados.horas
            })
            return response.status(201).json(curso)
        } catch (error) {
            //console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async listar(request, response) {

        const filtros = request.query;
        const whereClause = {};

        if (filtros.nome) {
            whereClause.nome = { [Op.iLike]: `%${filtros.nome}%` };
        }
        if (filtros.horas) {
            whereClause.horas = parseInt(filtros.horas, 10);
        }

        //console.log(whereClause)
        //console.log(filtros.nome)

        try {
            if (filtros.nome || filtros.horas) {
                const cursos = await Curso.findAll({
                    where: {
                        [Op.or]: whereClause
                    }
                    //If we need a specific search where the two query params are true
                    // where: {
                    //     [Op.and]: whereClause
                    // }
                })
                // validating 'cursos' nao encontrado
                //console.log('length',cursos.length)
                //console.log(cursos)
                if (cursos.length === 0){
                    return response.status(404).json({mensagem: "Curso não encontrado"})
                }
                return response.status(200).json(cursos)
            } else {
                const cursos = await Curso.findAll()
                return response.status(200).json(cursos)
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async editar(request, response) {
        try {
            const cursoId = request.params.id
            const dados = request.body
            console.log(dados)

            if (!dados.nome && !dados.horas) {
                return response.status(400).json({ mensagen: 'O campos nome ou hora do curso são necesarios' })
            }

            //validating horas
            if (dados.horas){
                if (typeof dados.horas != 'number' || dados.horas < 0) {
                    return response.status(400).json({ mensagen: 'A idade tem que ser um numero inteiro positivo' })
                }
            }

            const curso = await Curso.findByPk(cursoId)
            if (!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            curso.nome = dados.nome ?? curso.nome
            curso.horas = dados.horas ?? curso.horas

            await curso.save()
            return response.json(curso)
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' })
        }
    }

    async apagar(request, response) {
        try {
            const cursoId = request.params.id;

            const curso = await Curso.findByPk(cursoId);

            if (!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' });
            }

            await curso.destroy();

            return response.status(200).json({ mensagem: 'Curso excluído com sucesso' });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    // async listarUm(request, response) {
    //     try {
    //         const resposavelID = request.params.id
    //         const curso = await curso.findByPk(resposavelID)
    //         if (!curso) {
    //             return response.status(404).json({ mensagem: 'Responsável não encontrado' })
    //         }
    //         response.json(curso)
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(500).json({ mensagem: 'Erro no servidor' })
    //     }
    // }
}

module.exports = new CursoController()