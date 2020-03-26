const express = require('express')
const routes = express.Router()

const {
  User, Author, Address, Provider, Category, Book, Loan
} = require('./controllers')

routes.get('/users', User.index)
routes.get('/user/:id', User.show)
routes.post('/user', User.store)
routes.put('/user/:id', User.edit)
routes.delete('/user/:id', User.destroy)

routes.get('/authors', Author.index)
routes.post('/author', Author.store)

routes.get('/addresses', Address.index)
routes.get('/address/:user_id', Address.show)
routes.post('/address/:user_id', Address.store)
routes.put('/address/:user_id', Address.edit)
// routes.delete('/address/:user_id', Address.destroy) // Ver o comentário no controller.

routes.get('/providers', Provider.index)
routes.post('/provider', Provider.store)

routes.get('/categories', Category.index)
routes.get('/category/:id', Category.show)
routes.post('/category', Category.store)
routes.put('/category/:id', Category.edit)
routes.delete('/category/:id', Category.destroy)

routes.get('/books', Book.index)
routes.get('/book/:id', Book.show)
routes.post('/book', Book.store)
routes.put('/book/:id', Book.edit)
routes.delete('/book/:id', Book.destroy)

routes.get('/loans', Loan.index)
routes.post('/loan/:user_id/:book_id', Loan.store)

module.exports = routes