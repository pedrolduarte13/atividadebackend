const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo nome precisa ser um texto")
            .required("Campo nome é obrigatório"),
        idade: yup
            .number("Campo descricao precisa ser um numero")
            .required("Campo idade é obrigatório"),
        funcao: yup
            .string("Campo descricao precisa ser um texto")
            .required("Campo funcao é obrigatório"),
    }
)

function validarFuncionario(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json(
            {
                mensagem: "Erro na validação dos campos!",
                erro: err.errors
            }
        ))
}

module.exports = {
    validarFuncionario
}