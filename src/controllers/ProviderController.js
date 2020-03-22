const { Provider } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const providers = await Provider.findAll()

			return res.json({ providers })
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
			const { name, email, telephone, cpf } = req.body

			const [ provider, created_now ] = await Provider.findOrCreate({
				where: { email, cpf },
				defaults: { name, telephone }
			})

			if (created_now) {
				return res.json({ provider })
			} else {
				return res.json({ error: 'Esse fornecedor já está cadastrado!' })
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