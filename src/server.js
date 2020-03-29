const express = require('express')
const routes = require('./routes')

require('dotenv').config({  
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
})

require('./database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, (req, res) => {
  console.log('Server rodando na porta', PORT)
})