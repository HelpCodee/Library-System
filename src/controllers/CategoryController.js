const { Category } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const categories = await Category.findAll()
      
      return res.json({ categories })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params

      const category = await Category.findByPk(id)
      if (!category) {
        return res.json({ error: 'Categoria não encontrada.' })
      }

      return res.json(category)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async store(req, res) {
    try {
      const { name } = req.body

      const [ category, created_now ] = await Category.findOrCreate({
        where: { name }
      })

      if (!created_now) {
        return res.json({ error: 'Essa categoria já está cadastrada.' })
      }

      return res.json({ category })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async edit(req, res) {
    try {
      const { id } = req.params
      const { name } = req.body

      let category = await Category.findByPk(id)
      if (!category) {
        return res.json({ error: 'Categoria não encontrada.' })
      }

      category = await category.update({ name })

      return res.json(category)

    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async destroy(req, res) {
    try {
      const { id } = req.params

      await Category.destroy({ where: { id } })

      return res.json({ message: 'Categoria apagada.' })
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
}