const { Book, Category } = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const books = await Book.findAll({
				include: [{
					association: 'categories',
					attributes: ['name', 'id'],
					through: {
						attributes: []
					}
				},{
					association: 'authors',
					attributes: ['name', 'surname']
				}]
			})

			return res.json({ books })
		} catch(error) {
			return res.json({
				error: error.message
			})
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params

			let book = await Book.findByPk(id, {
				include: {
					association: 'categories',
					attributes: ['name', 'id'],
					through: {
						attributes: []
					}
				}
			})
			if (!book) {
				return res.json({ error: 'Livro não encontrado.' })
			}

			book = {
				id: book.id,
				title: book.title,
				volume: book.volume,
				edition: book.edition,
				synopsis: book.synopsis,
				author_id: book.author_id,
				categories: book.categories
			}

			return res.json(book)
		} catch(error) {
			return res.json({
				error: error.message
			})
		}
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
			
			const book = await Book.create({
				title,
				author_id,
				publisher_id,
				volume,
				edition,
				year,
				synopsis
			})

			// Recebe as categorias como string separadas por vírgula
			let { categories } = req.body 

			// Cria um array cortando as vírgulas
			// categories = categories.split(',')

			// Tira os espaços com trim() e guarda em cat.
			// let cat = []
			// for (let c of categories) {
			// 	cat.push(c.trim())
			// }

			// Loop pra adicionar todas as categorias ao livro.
			// for (let categoria of cat) {
			// 	const [ category ] = await Category.findOrCreate({
			// 		where: { name: categoria }
			// 	})
			// 	await book.setCategory(category)
			// }
			await book.setCategories(categories)

			return res.json(book)
		} catch(error) {
			return res.json({
				error: error.message
			})
		}
	},
	
	async edit(req, res) {
		
	},
	
	async destroy(req, res) {

	},
}