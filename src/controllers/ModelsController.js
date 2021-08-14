const Brand = require('../models/Brands');
const Model = require('../models/Models');

module.exports = {
  async index(req, res) {
    try {
      const { brand_id } = req.params;

      const brand = await Brand.findByPk(brand_id, {
        include:
        {
          association: 'models'
        }
      });


      return res.status(200).json({
        brand
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao listar modelos, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const model = await Model.findByPk(id);

      return res.status(200).json(model)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao listar modelos, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { brand_id } = req.params;
      const { name } = req.body;

      const verify_brand = await Brand.findByPk(brand_id);

      if (!verify_brand) return res.status(404).json({err: 'Marca informada não existe'})

      const [model, created] = await Model.findOrCreate({
        where: { name },
        defaults: {
          name,
          brand_id,
          active: 1
        }
       });

      return res.status(201).json({
        title: 'Modelo cadastrada com sucesso',
        created,
        model
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir modelos, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name } = req.body;
      const verifyModel = await Model.findOne({where: {name}});
      
      if (verifyModel && verifyModel.name === name) return res.status(405).json({msg: `A modelos ${name} já está cadastrada`, verifyModel})

      const model = await Model.update({name}, {where: {
        id
      }});

      return res.status(200).json({msg: 'Modelo atualizado com sucesso', model})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir modelos, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const model = await Model.destroy({where: {id}});

      return res.status(200).json({msg: 'Modelo deletado com sucesso', model})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao deletar modelos, tente novamente',
        e
      })
    }
  },
}