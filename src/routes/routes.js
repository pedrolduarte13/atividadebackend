const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const DepartamentoController = require('../controllers/DepartamentoController')

// validators
const { validarID } = require('../validators/idValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarDepartamento } = require('../validators/DepartamentoValidator')

// Cargo
router.post('/cargos', validarCargo, CargoController.criar)
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

// Funcionario
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

// Departamentos
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)

module.exports = router;
