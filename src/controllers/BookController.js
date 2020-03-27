const { Book, Category } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index(req, res) {
    try {
      const { limit, last_id, first_id } = req.query

      
      const getWhere = () => {
        if (last_id) {
          return {
            id: {
              [Op.lt]: last_id
            }
          }
        }

        if (first_id) {
          return {
            id: {
              [Op.gt]: first_id
            }
          }
        }
      }

      const getOrder = () => {
        return first_id ? [['id', 'ASC']] : [['id', 'DESC']]
      }

      const result = (books) => {
        return first_id ? books.reverse() : books
      }

      console.log(getWhere())
      let books = await Book.findAll({
        limit,
        where: getWhere(),
        order: getOrder(),
        include: [{
          association: 'categories',
          attributes: ['name', 'id'],
          through: {
            attributes: []
          }
        }, {
          association: 'author',
          attributes: ['name', 'surname']
        }, {
          association: 'publisher',
          attributes: ['name']
        }]
      })

      let booksLength
      if (!last_id && !first_id) {
        booksLength = await Book.count()
        books.unshift({ total: booksLength })
      }
      return res.json(result(books))
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
        include: [{
          association: 'categories',
          attributes: ['name', 'id'],
          through: {
            attributes: []
          }
        }, {
          association: 'authors',
          attributes: ['name', 'surname']
        }, {
          association: 'publishers',
          attributes: ['name']
        }]
      })
      if (!book) {
        return res.json({ error: 'Livro não encontrado.' })
      }
      const { createdAt, updatedAt, author_id, publisher_id, ...data } = book.dataValues

      return res.json(data)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async store(req, res) {
    try {
      const { categories, ...data } = req.body
      
      // title, author_id, publisher_id, volume, edition, year, synopsis
      const book = await Book.create(data)
      if (!book) {
        return res.json({ error: 'Livro não criado.' })
      }

      // Seta as categorias ao relacionamento com o livro.
      await book.setCategories(categories)

      return res.json(book)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async edit(req, res) {
    try {
      const { id } = req.params
      const { categories, ...data } = req.body

      let book = await Book.findByPk(id)
      if (!book) {
        return res.json({ error: 'Livro não encontrado.' })
      }

      let bookCreated = await book.update(data)
      if (!bookCreated) {
        return res.json({ error: 'Livro não atualizado.' })
      }

      await bookCreated.setCategories(categories)

      return res.json(bookCreated)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async destroy(req, res) {
    try {
      const { id } = req.params

      const destroyed = await Book.destroy({ where: { id } })
      if (!destroyed) {
        return res.json({ error: 'Esse livro não existe.' })
      }

      return res.json({ message: 'Livro apagado.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
}