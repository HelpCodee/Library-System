const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Address = require('../models/Address')
const Author = require('../models/Author')
const Provider = require('../models/Provider')
const Publisher = require('../models/Publisher')
const Category = require('../models/Category')
const Book = require('../models/Book')
const Loan = require('../models/Loan')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Author.init(connection)
Provider.init(connection)
Publisher.init(connection)
Category.init(connection)
Book.init(connection)
Loan.init(connection)

Address.associate(connection.models)
Category.associate(connection.models)
Book.associate(connection.models)
Loan.associate(connection.models)

module.exports = connection