const { Publisher } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const publishers = await Publisher.findAll()

      return res.json({ publishers })
    } catch(error) {
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
      const { name } = req.body

      const [ publisher, created_now ] = await Publisher.findOrCreate({
        where: { name }
      })

      if (!created_now) {
        return res.json({ error: 'Essa editora já está cadastrada!' })
      }

      return res.json(publisher)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async edit(req, res) {
    try {
      const { id } = req.params
      const { name, surname } = req.body

      let publisher = await Publisher.findByPk(id)
      if (!publisher) {
        return res.json({ error: 'Editora não encontrada.' })
      }

      publisher = await publisher.update({ name, surname })

      return res.json(publisher)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async destroy(req, res) {
    try {
      const { id } = req.params

      let destroyed = await Publisher.destroy({ where: { id } })
      if (!destroyed) {
        return res.json({ error: 'Editora não encontrada.' })
      }

      return res.json({ message: 'Editora apagada.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
}