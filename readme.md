ex1 - Rota de cadastro de curso

Desenvolva uma rota POST com o endpoint ‘/cursos’ capaz de receber, no corpo da requisição, o nome do curso e sua duração em horas. Em seguida, essa rota deve retornar o objeto do curso recém-criado no banco de dados.

Retorne um status code 201 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.

ex2 - Rota de listagem de cursos

Desenvolva uma rota GET com o endpoint ‘/cursos’, capaz de listar, em formato JSON, todos os cursos cadastrados no banco de dados.

ex3 - Pesquisa de cursos

Implemente, na rota de listagem de cursos, uma pesquisa pelo nome de um curso e duração. Use o recurso de Query params.

ex4 - Rota de atualização de cursos

Desenvolva uma rota PUT com o endpoint ‘/cursos/:id’, capaz de receber no corpo da requisição dados de um curso existente para ser atualizado . Em seguida, essa rota deve retornar o objeto do curso recém-atualizado no banco de dados.

Retorne um status code 200 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.

Ex. 5 - Rota de deleção de curso

Desenvolva uma rota DELETE com o endpoint ‘/cursos/:id’, capaz de deletar um curso com base no id recebido.

Retorne um status code 204 na resposta da requisição. Além disso, valide se o id informado realmente existe no banco de dados. Caso não exista, retorne um error 404 na resposta da requisição, informando que o curso não foi encontrado.

Ex. 6 - Novo CRUD

"Seguindo o contexto de uma aplicação para escola, crie rotas GET, POST, DELETE e PUT para adicionar funcionalidades à aplicação.

Por exemplo, você pode criar um CRUD de Professores. Não esqueça de adicionar a migration e o model do elemento que você escolheu."
