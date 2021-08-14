const Model = require('../models/Models');
const Versions = require('../models/Versions');

module.exports = {
  async index(req, res) {
    try {
      const { model_id } = req.params;

      const model = await Model.findByPk(model_id, {
        include:
        {
          association: 'version'
        }
      });


      return res.status(200).json({
        model
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao listar versão, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const version = await Versions.findByPk(id);

      return res.status(200).json(version)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao listar versão, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { model_id } = req.params;
      const { name } = req.body;

      const verify_model = await Model.findByPk(model_id);

      if (!verify_model) return res.status(404).json({err: 'Marca informada não existe'})

      const [version, created] = await Versions.findOrCreate({
        where: { name },
        defaults: {
          name,
          model_id,
          active: 1
        }
       });

      return res.status(201).json({
        title: 'Versão cadastrada com sucesso',
        created,
        version
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir versão, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name } = req.body;

      const verifyVersions = await Versions.findOne({where: {name}});

      if (verifyVersions.name === name) return res.status(405).json({msg: `A versão ${name} já está cadastrada`, verifyVersions})

      const version = await Versions.update({name}, {where: {
        id
      }});

      return res.status(200).json({msg: 'Versão atualizado com sucesso', version})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir versão, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const version = await Versions.destroy({where: {id}});

      return res.status(200).json({msg: 'Versão deletado com sucesso', version})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao deletar versão, tente novamente',
        e
      })
    }
  },
}