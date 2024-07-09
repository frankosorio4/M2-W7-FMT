const Curso = require('../models/Curso')

class CursoController {

    async criar(request, response) {
        try {
            // validation of required fields not empty
            const dados = request.body

            if (!dados.nome || !dados.horas) {
                return response.status(400).json({ mensagen: 'Os campos nome e horas do curso são obrigatorios' })
            }

            // //validating email format
            // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // if (!emailRegex.test(dados.email)) {
            //     return response.status(400).json({ mensagem: 'Email inválido.' });
            // }

            //validating horas
            if (typeof dados.horas != 'number' || dados.horas < 0) {
                return response.status(400).json({ mensagen: 'A idade tem que ser um numero inteiro positivo' })
            }

            // //validating sexo
            // const array = ['Masculino', 'Feminino', 'Outro']
            // if (!array.includes(dados.sexo)) {
            //     return response.status(400).json({ mensagen: 'Valor não valido. Os valores validos são Masculino, Feminino, Outro.'})
            // }

            //validating if the email there exist in db
            // const isemailDb = await conexao.query("select * from clients where email = $1", [dados.email])

            // if (isemailDb.rows.length != 0) {
            //     return response.status(400).json({ mensagem: 'O EMAIL fornecido ja esta cadastrado' })
            // }

            const curso = await Curso.create({
                nome: dados.nome,
                horas: dados.horas
            })
            response.status(201).json(curso)
        } catch (error) {
            //console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    // async listar(request, response) {
    //     try {
    //         const responsaveis = await Responsavel.findAll()
    //         response.json(responsaveis)
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(500).json({ mensagem: 'Erro no servidor' })
    //     }
    // }

    // async listarUm(request, response) {
    //     try {
    //         const resposavelID = request.params.id
    //         const responsavel = await Responsavel.findByPk(resposavelID)
    //         if (!responsavel) {
    //             return response.status(404).json({ mensagem: 'Responsável não encontrado' })
    //         }
    //         response.json(responsavel)
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(500).json({ mensagem: 'Erro no servidor' })
    //     }
    // }

    // async editar(request, response) {
    //     try {

    //         // TO DO VALIDAR DATA
    //         const resposavelID = request.params.id
    //         const dados = request.body

    //         const responsavel = await Responsavel.findByPk(resposavelID)
    //         if (!responsavel) {
    //             return response.status(404).json({ mensagem: 'Responsável não encontrado' })
    //         }

    //         responsavel.nome = dados.nome ?? responsavel.nome
    //         responsavel.idade = dados.idade ?? responsavel.idade
    //         responsavel.email = dados.email ?? responsavel.email
    //         responsavel.senha = dados.senha ?? responsavel.senha
    //         responsavel.sexo = dados.sexo ?? responsavel.sexo

    //         await responsavel.save()
    //         response.json(responsavel)
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(500).json({ mensagem: 'Erro no servidor' })
    //     }
    // }

    // async apagar(request, response) {
    //     try {
    //         const resposavelID = request.params.id

    //         const responsavel = await Responsavel.findByPk(resposavelID)

    //         if (!responsavel) {
    //             return response.status(404).json({ mensagem: 'Responsável não encontrado' })
    //         }

    //         await responsavel.destroy()

    //         response.json({ mensagem: 'Responsável excluído com sucesso' })
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(500).json({ mensagem: 'Erro no servidor' })
    //     }
    // }

}

module.exports = new CursoController()