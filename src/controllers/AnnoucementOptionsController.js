const AnnoucementOptions = require('../models/AnnoucementOptions');

module.exports = {
  async index(req, res) {
    try {
      const annoucementoptions = await AnnoucementOptions.findAndCountAll({
        include: [
          {
            all: true,
          }
        ]
      });

      return res.status(200).json({
        annoucementoptions
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opcões do anúncio, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const annoucementoptions = await AnnoucementOptions.findByPk(id, {
        include: [
          {
            all: true,
          }
        ]
      });

      return res.status(200).json(annoucementoptions)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opcões do anúncio, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const {
        annoucement_id,
        options_id,
      } = req.headers;

      const annoucementoptions = await AnnoucementOptions.create({
        annoucement_id,
        options_id,
      });

      return res.status(201).json({
        title: 'Opção cadastrada com sucesso',
        annoucementoptions
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opcões do anúncio, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name, active } = req.body;

      const verifyAnnoucementOptions = await AnnoucementOptions.findOne({where: {id}});

      if (
        verifyAnnoucementOptions === null
      ) return res.status(404).json({msg: 'O opcões do anúncio informado não existe'})

      const annoucementoptions = await AnnoucementOptions.update({
        description,
        km,
        sale_value,
        is_armored,
        active,
        year_manufacture,
        year_model, 
        color_id,
        user_id,
        brand_id,
        model_id,
        version_id,   
        active
      }, {
        where: {
        id
      }});

      return res.status(200).json({msg: 'Opção atualizado com sucesso', annoucementoptions})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opcões do anúncio, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const annoucementoptions = await AnnoucementOptions.destroy({where: {id}});

      return res.status(200).json({msg: 'Opção deletado com sucesso', annoucementoptions})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opcões do anúncio, tente novamente',
        e
      })
    }
  },
}