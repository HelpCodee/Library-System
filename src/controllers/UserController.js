const User = require('../models/User')

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll()

      return res.json(users)
    } catch (error) {
      return res.json({ 
        error: error.message
      })
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params

      const user = await User.findByPk(id)
      if (!user) {
        return res.json({ error: 'Usuário não encontrado.' })
      }

      return res.json(user)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async store(req, res) {
    try {
      const {
        name, surname, email, password, telephone, cpf
      } = req.body

      let user = await User.findOne({
        where: { email }
      })
      if (user) {
        return res.json({ error: 'Email já cadastrado.' })
      }

      user = await User.create({
        name, surname, email, password, telephone, cpf
      })

      return res.json(user)
    } catch (error) {
      return res.json({ 
        error: error.message
      })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params
      const {
        name, surname, email, password, telephone, cpf, is_admin = false
      } = req.body

      let user = await User.findByPk(id)
      if (!user) {
        return res.json({ error: 'Usuário não encontrado.' })
      }

      user = await user.update({
        name, surname, email, password, telephone, cpf, is_admin
      })

      return res.json(user)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params

      const destroyed = await User.destroy({ where: { id } })
      if (!destroyed) {
        return res.json({ error: 'Usuário não encontrado.' })
      }

      return res.json({ message: 'Usuário apagado.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  }
}