const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    funcao: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario

