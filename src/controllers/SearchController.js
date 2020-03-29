const { Book } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async findBooks(req, res) {
    const { title, categories } = req.query

    if (!title) return res.status(400).json({ error: 'Precisa de um título.' })

    // Filtro por título
    let books = await Book.findAll({
      where: { 
        title: {
          [Op.substring]: title
        }
      },
      order: [['id', 'DESC']],
      include: [{
        association: 'categories',
        attributes: ['name'],
        through: {
          attributes: []
        }
      }, {
        association: 'author',
        attributes: ['name']
      }]
    })

    // Filtro por categoria
    if (categories) {
      let result = []
      for (let book of books) {
        for (let tag of book.categories) {
          if (categories.includes(tag.name)) {
            result.push(book)
            break
          }
        }
      }
      // Retorno filtrado por categorias.
      return res.json(result)
    }
    // Retorno se não tiver categorias para filtrar.
    return res.json(books)
  }
}