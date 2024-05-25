const express = require('express')
const app = express()
const PORT = 3000

const DBconnect = require('./database/connection')
DBconnect()

app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checkToken } = require('../validators/AutenticacaoValidator')

const {} = require('./routes/routes')
app.use(routes)

const routes = require('./routes/routes')
app.use(routes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})