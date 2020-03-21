const { Address } = require('../models')

module.exports = {
	async index(req, res) {

	},

	async show(req, res) {

	},
	
	async store(req, res) {
		try {
			const { user_id } = req.params
			const { zipcode, district, street, number } = req.body

			const [ adress, created_now ] = await Address.findOrCreate({
				where: { user_id },
			 	defaults: { zipcode, district, street, number }
			})

			if (created_now) {
				return res.json({ adress })
			} else {
				return res.json({ error: 'Esse usuário já possui endereço.' })
			}
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

	},
}