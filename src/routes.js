const express = require('express')
const routes = express.Router()

const {
  User, Author, Address, Provider, Publisher, Category, Book, Loan
} = require('./controllers')

routes.get('/users', User.index)
routes.get('/users/:id', User.show)
routes.post('/users', User.store)
routes.put('/users/:id', User.edit)
routes.delete('/users/:id', User.destroy)

routes.get('/authors', Author.index)
routes.post('/authors', Author.store)
routes.put('/authors/:id', Author.edit)
routes.delete('/authors/:id', Author.destroy)

routes.get('/addresses', Address.index)
routes.get('/addresses/:user_id', Address.show)
routes.post('/addresses/:user_id', Address.store)
routes.put('/addresses/:user_id', Address.edit)
// routes.delete('/addresses/:user_id', Address.destroy) // Ver o comentário no controller.

routes.get('/publishers', Publisher.index)
routes.post('/publishers', Publisher.store)
routes.put('/publishers/:id', Publisher.edit)
routes.delete('/publishers/:id', Publisher.destroy)

routes.get('/providers', Provider.index)
routes.get('/providers/:id', Provider.show)
routes.post('/providers', Provider.store)
routes.put('/providers/:id', Provider.edit)
routes.delete('/providers/:id', Provider.destroy)

routes.get('/categories', Category.index)
routes.get('/categories/:id', Category.show)
routes.post('/categories', Category.store)
routes.put('/categories/:id', Category.edit)
routes.delete('/categories/:id', Category.destroy)

routes.get('/books', Book.index)
routes.get('/books/:id', Book.show)
routes.post('/books', Book.store)
routes.put('/books/:id', Book.edit)
routes.delete('/books/:id', Book.destroy)

routes.get('/loans', Loan.index)
routes.post('/loans/:user_id/:book_id', Loan.store)

module.exports = routes