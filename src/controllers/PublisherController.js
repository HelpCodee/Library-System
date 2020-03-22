const { Publisher } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const publishers = await Publisher.findAll()

			return res.json({ publishers })
		} catch(error) {
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
			const { name } = req.body

			const [ publisher, created_now ] = await Publisher.findOrCreate({
				where: { name }
			})

			if (created_now) {
				return res.json({ publisher })
			} else {
				return res.json({ error: 'Essa editora já está cadastrada!' })
			}
		} catch(error) {
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