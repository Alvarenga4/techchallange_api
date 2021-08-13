const Brand = require('../models/Brands');

module.exports = {
  async index(req, res) {
    try {
      const brand = await Brand.findAndCountAll({where: {active: 1}});

      return res.status(200).json({
        brand
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir marca, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const brand = await Brand.findByPk(id);

      return res.status(200).json(brand)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir marca, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { name } = req.body;  

      const [brand, created] = await Brand.findOrCreate({
        where: { name },
        defaults: {
          name,
          active: 1
        }
       });

      return res.status(201).json({
        title: 'Marca cadastrada com sucesso',
        created,
        brand
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir marca, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name, active } = req.body;

      const verifyBrand = await Brand.findOne({where: {name}});

      if (verifyBrand.name === name && verifyBrand.active === active) return res.status(405).json({msg: `A marca ${name} já está cadastrada`, verifyBrand})

      const brand = await Brand.update({name, active}, {where: {
        id
      }});

      return res.status(200).json({msg: 'Marca atualizado com sucesso', brand})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir marca, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const brand = await Brand.destroy({where: {id}});

      return res.status(200).json({msg: 'Marca deletado com sucesso', brand})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir marca, tente novamente',
        e
      })
    }
  },
}