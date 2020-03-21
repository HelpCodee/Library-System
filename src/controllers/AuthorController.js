const Author = require('../models/Author')

module.exports = {
	async index(req, res) {
		try {
			const authors = await Author.findAll()

			return res.json(authors)
		} catch (error) {
			return res.json({ 
				error: error.parent.detail,
				code: error.parent.code
			})
		}
	},

	async show(req, res) {
		// Desnecessário
	},

	async store(req, res) {
		try {
			const { name, surname } = req.body

			const author = await Author.create({
				name, surname
			})

			return res.json(author)
		} catch (error) {
			return res.json({ 
				error: error.parent.detail,
				code: error.parent.code
			})
		}
			
	},

	async edit(req, res) {

	},

	async destroy(req, res) {

	}
}