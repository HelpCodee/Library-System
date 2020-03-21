const express = require('express')
const routes = express.Router()

const { User, Author, Address } = require('./controllers')

routes.get('/users', User.index)
routes.post('/user', User.store)

routes.get('/authors', Author.index)
routes.post('/author', Author.store)

// routes.get('/addresses', Address.index)
routes.post('/address/:user_id', Address.store)

module.exports = routes