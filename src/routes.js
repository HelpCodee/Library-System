const express = require('express')
const routes = express.Router()

const {
  User, Author, Address, Provider, Publisher, Category, Book, Loan, Auth
} = require('./controllers')

const { authUser, authAdmin } = require('./middlewares')

routes.get('/login', Auth.singin)

routes.get('/me', authUser, (req, res) => {
  res.json(req.auth)
})

routes.get('/users', authAdmin, User.index)          // ADM
routes.get('/users/:id', authAdmin, User.show)       // ADM
routes.post('/users', User.store)                    // All
routes.put('/users/:id', authAdmin, User.edit)       // ADM
routes.delete('/users/:id', authAdmin, User.destroy) // ADM

routes.get('/authors', Author.index)                      // ALL
routes.post('/authors', authAdmin, Author.store)          // ADM
routes.put('/authors/:id', authAdmin, Author.edit)        // ADM
routes.delete('/authors/:id', authAdmin, Author.destroy)  // ADM

routes.get('/addresses', authAdmin, Address.index)           // ADM
routes.get('/addresses/:user_id', authAdmin, Address.show)   // ADM
routes.post('/addresses/:user_id', authAdmin, Address.store) // ADM
routes.put('/addresses/:user_id', authAdmin, Address.edit)   // ADM
// routes.delete('/addresses/:user_id', Address.destroy) // Ver o comentário no controller.

routes.get('/publishers', Publisher.index)                      // ALL
routes.post('/publishers', authAdmin, Publisher.store)          // ADM
routes.put('/publishers/:id', authAdmin, Publisher.edit)        // ADM
routes.delete('/publishers/:id', authAdmin, Publisher.destroy)  // ADM

routes.get('/providers', authAdmin, Provider.index)          // ADM
routes.get('/providers/:id', authAdmin, Provider.show)       // ADM
routes.post('/providers', authAdmin, Provider.store)         // ADM
routes.put('/providers/:id', authAdmin, Provider.edit)       // ADM
routes.delete('/providers/:id', authAdmin, Provider.destroy) // ADM

routes.get('/categories', Category.index)                       // ALL
routes.get('/categories/:id', Category.show)                    // ALL
routes.post('/categories', authAdmin, Category.store)           // ADM
routes.put('/categories/:id', authAdmin, Category.edit)         // ADM
routes.delete('/categories/:id', authAdmin, Category.destroy)   // ADM

routes.get('/books', Book.index)                      // ALL
routes.get('/books/:id', Book.show)                   // ALL
routes.post('/books', authAdmin, Book.store)          // ADM
routes.put('/books/:id', authAdmin, Book.edit)        // ADM
routes.delete('/books/:id', authAdmin, Book.destroy)  // ADM

routes.get('/loans', authAdmin, Loan.index)                               // ADM
routes.post('/loans/users/:user_id/books/:book_id', authUser, Loan.store) // USER


module.exports = routes