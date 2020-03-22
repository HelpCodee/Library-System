const { Loan, User, Book } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const loans = await Loan.findAll()

			return res.json(loans)
		} catch(error) {
			console.log(error.parent)
			return res.json({
				error: error.parent.detail,
				code: error.parent.code
			})
		}
	},

	async show(req, res) {
		
	},
	
	async store(req, res) {
		try {
			const { user_id, book_id } = req.params

			const user = await User.findByPk(user_id)
			const book = await Book.findByPk(book_id)
			if (!user || !book) {
				return res.json({ error: 'Empréstimo inválido.' })
			}

			const loan = await Loan.create({ user_id, book_id, loan_date: new Date() })

			return res.json(loan)
		
		} catch(error) {
			console.log(error)
			return res.json({
				error: error.parent.detail,
				code: error.parent.code
			})
		}
	},
	
	async edit(req, res) {
		
	},
	
	async destroy(req, res) {

	},
}