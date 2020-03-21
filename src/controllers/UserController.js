const User = require('../models/User')

module.exports = {
	async index(req, res) {
		try {
			const users = await User.findAll()

			return res.json(users)
		} catch (error) {
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
			const {
				name, surname, email, password, telephone, cpf
			} = req.body

			let user = await User.findOne({
				where: { email }
			})
			if (user) {
				return res.json({ error: 'Email já cadastrado.' })
			}

			user = await User.create({
				name, surname, email, password, telephone, cpf
			})

			return res.json(user)
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