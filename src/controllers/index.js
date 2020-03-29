const User = require('./UserController')
const Address = require('./AddressController')
const Author = require('./AuthorController')
const Provider = require('./ProviderController')
const Publisher = require('./PublisherController')
const Category = require('./CategoryController')
const Book = require('./BookController')
const Loan = require('./LoanController')
const Auth = require('./AuthController')
const Search = require('./SearchController')

module.exports = {
  User, Address, Author, Provider, Publisher, Category, Book, Loan, Auth, Search
}