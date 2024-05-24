const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')


async function registrar(req, res) {

    const {nome, email, senha} = req.body

    const usuario = await Usuario.findOne({ email })

    if (usuario) {
        return res.status(400).json({ mensagem: "Este email já está cadastrado" })
    }

    const hash = await bcrypt.hash(senha, 20)

    const novoUsuario = new Usuario(    
        {
            nome,
            email,
            senha: hash
        }
    )

    await novoUsuario.save()
        
    res.status(201),json({ mensagem: "Usuario cadastrado com sucesso" })
}

module.exports = {
    registrar
}