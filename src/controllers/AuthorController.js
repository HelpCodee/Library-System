const Author = require('../models/Author')

module.exports = {
  async index(req, res) {
    try {
      const authors = await Author.findAll()

      return res.json(authors)
    } catch (error) {
      return res.json({
        error: error.message
      })
    }
  },
  // Desnecessário
  // async show(req, res) {

  // },

  async store(req, res) {
    try {
      const { name, surname } = req.body

      const [ author, created_now ] = await Author.findOrCreate({
        where: { name, surname }
      })

      if (!created_now) {
        return res.json({ error: 'Esse autor já está cadastrado.' })
      }

      return res.json(author)
    } catch (error) {
      return res.json({
        error: error.message
      })
    }
      
  },

  async edit(req, res) {
    try {
      const { id } = req.params
      const { name, surname } = req.body

      let author = await Author.findByPk(id)
      if (!author) {
        return res.json({ error: 'Autor não encontrado.' })
      }

      author = await author.update({ name, surname })

      return res.json(author)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params

      let destroyed = await Author.destroy({ where: { id } })
      if (!destroyed) {
        return res.json({ error: 'Autor não encontrado.' })
      }

      return res.json({ message: 'Autor apagado.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  }
}