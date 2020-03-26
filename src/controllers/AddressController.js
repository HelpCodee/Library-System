const { Address } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const addresses = await Address.findAll({
        include: [{
          association: 'user',
          attributes: ['name', 'surname']
        }]
      })

      return res.json(addresses)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },

  async show(req, res) {
    try {
      const { user_id } = req.params

      const address = await Address.findOne({ 
        where: { user_id },
        include: [{
          association: 'user',
          attributes: ['name', 'surname']
        }]
      })

      if (!address) {
        return res.json({ error: 'Esse usuário não cadastrou um endereço.' })
      }

      return res.json(address)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  
  async store(req, res) {
    try {
      const { user_id } = req.params
      const { zipcode, district, street, number } = req.body

      const [ adress, created_now ] = await Address.findOrCreate({
        where: { user_id },
        defaults: { zipcode, district, street, number }
      })

      if (created_now) {
        return res.json({ adress })
      } else {
        return res.json({ error: 'Esse usuário já possui endereço.' })
      }
    } catch (error) {
      return res.json({ 
        error: error.message
      })
    }
  },
  
  async edit(req, res) {
    try {
      const { user_id } = req.params
      const { zipcode, district, street, number } = req.body

      let address = await Address.findOne({ where: { user_id } })
      if (!address) {
        return res.json({ error: 'Esse usuário não cadastrou um endereço.' })
      }

      address = await address.update({ zipcode, district, street, number })

      return res.json(address)
    } catch(error) {
      return res.json({
        error: error.message
      })
    }
  },
  // O usuário não deve ser deixado sem endereço. O endereço será apagado junto do usuário.
  // async destroy(req, res) {
  //  try {
  //    const { user_id } = req.params
      
  //    let destroyed = await Address.destroy({ where: { user_id } })
  //    if (!destroyed) {
  //      return res.json({ error: 'Esse usuário não cadastrou um endereço.' })
  //    }
      
 //       return res.json({ message: 'Endereço apagado.' })
  //  } catch(error) {
  //    return res.json({
  //      error: error.message
  //    })
  //  }
  // },
}