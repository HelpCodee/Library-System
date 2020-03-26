const { Provider } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const providers = await Provider.findAll()

      return res.json(providers)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params

      const provider = await Provider.findByPk(id)
      if (!provider) {
        return res.json({ error: 'Fornecedor não encontrado.' })
      }

      return res.json(provider)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async store(req, res) {
    try {
      const { name, email, telephone, cpf } = req.body

      const [ provider, created_now ] = await Provider.findOrCreate({
        where: { email, cpf },
        defaults: { name, telephone }
      })

      if (!created_now) {
        return res.json({ error: 'Esse fornecedor já está cadastrado!' })
      }

      return res.json(provider)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async edit(req, res) {
    try {
      const { id } = req.params
      const { name, email, telephone, cpf } = req.body

      let provider = await Provider.findByPk(id)
      if (!provider) {
        return res.json({ error: 'Fornecedor não encontrado.' })
      }

      provider = await provider.update({ name, email, telephone, cpf })

      return res.json(provider)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async destroy(req, res) {
    try {
      const { id } = req.params

      const destroyed = await Provider.destroy({ where: { id } })
      if (!destroyed) {
        return res.json({ error: 'Esse fornededor não existe.' })
      }

      return res.json({ message: 'Fornecedor apagado.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
}