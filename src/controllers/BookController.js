const { Book, Category } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const books = await Book.findAll({
				include: {
					association: 'categories',
					attributes: ['name'],
					through: {
						attributes: []
					}
				}
			})

			return res.json({ books })
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
			const {
				title,
				author_id,
				publisher_id,
				volume,
				edition,
				year,
				synopsis
			} = req.body
			
			const [ book, created_now ] = await Book.findOrCreate({
				where: {
					title,
					author_id,
					publisher_id,
					volume,
					edition,
					year
				},
				defaults: { synopsis }
			})

			if (created_now) {
				// Recebe as categorias como string separadas por vírgula
				let { categories } = req.body 

				// Cria um array cortando as vírgulas
				categories = categories.split(',')

				// Tira os espaços com trim() e guarda em cat.
				let cat = []
				for (let c of categories) {
					cat.push(c.trim())
				}

				// Loop pra adicionar todas as categorias ao livro.
				for (let categoria of cat) {
					const [ category ] = await Category.findOrCreate({
						where: { name: categoria }
					})
					await book.addCategory(category)

					// catsResult.push(category)
				}

				return res.json(book)				
			} else {
				return res.json({ error: 'Esse livro já está cadastrado!' })
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