const express = require('express')
const routes = express.Router()

const {
	User, Author, Address, Provider, Category, Book
} = require('./controllers')

routes.get('/users', User.index)
routes.post('/user', User.store)

routes.get('/authors', Author.index)
routes.post('/author', Author.store)

// routes.get('/addresses', Address.index)
routes.post('/address/:user_id', Address.store)

routes.get('/providers', Provider.index)
routes.post('/provider', Provider.store)

routes.get('/categories', Category.index)
routes.post('/category', Category.store)

routes.get('/books', Book.index)
routes.post('/book', Book.store)

module.exports = routes