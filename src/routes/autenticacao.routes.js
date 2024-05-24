const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/AutenticacaoController')

const {validarUsuario} = require('../validators/AutenticacaoValidator')

router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar)

module.exports = router