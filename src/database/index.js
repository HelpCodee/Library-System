const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const {
	User,
	Address,
	Author,
	Provider,
	Publisher,
	Category,
	Book,
	Loan
} = require('../models')

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