// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into Responsavel
const Curso = connection.define('cursos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Curso;