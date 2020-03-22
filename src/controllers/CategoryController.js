const { Category } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const categories = await Category.findAll()

			return res.json({ categories })
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

			const [ category, created_now ] = await Category.findOrCreate({
				where: { name }
			})

			if (created_now) {
				return res.json({ category })
			} else {
				return res.json({ error: 'Essa categoria já está cadastrada!' })
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