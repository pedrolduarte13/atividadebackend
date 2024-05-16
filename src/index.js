const express = require('express')
const app = express()
const PORT = 3000

const DBconnect = require('./database/connection')
DBconnect()

app.use(express.json())

const routes = require('./routes/routes')
app.use(routes)


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})