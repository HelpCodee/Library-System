const express = require('express')
const routes = require('./routes')

require('dotenv').config({  
  path: __dirname + process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
})

require('./database')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, (req, res) => {
  console.log('Server rodando em http://localhost:3333')
})