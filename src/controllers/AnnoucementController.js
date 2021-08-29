const Annoucements = require('../models/Annoucements');

module.exports = {
  async index(req, res) {
    try {
      const annoucement = await Annoucements.findAndCountAll(
        {where: {active: 1},
        include: [
          {
            all: true,
          }
        ]
      });

      return res.status(200).json({
        annoucement
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir anúncio, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const annoucement = await Annoucements.findByPk(id, {
        include: [
          {
            all: true,
          }
        ]
      });

      return res.status(200).json(annoucement)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir anúncio, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const {
        color_id,
        user_id,
        brand_id,
        model_id,
        version_id,
      } = req.headers;
      const { 
        description,
        km,
        sale_value,
        is_armored,
        year_manufacture,
        year_model,
      } = req.body;  

      const annoucement = await Annoucements.create({
        description,
        km,
        sale_value,
        is_armored,
        year_manufacture,
        year_model, 
        color_id,
        user_id,
        brand_id,
        model_id,
        version_id,
        active: 1   
      });

      return res.status(201).json({
        title: 'Anúncio cadastrado com sucesso',
        annoucement
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir anúncio, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name, active } = req.body;

      const verifyAnnoucements = await Annoucements.findOne({where: {id}});

      if (
        verifyAnnoucements === null
      ) return res.status(404).json({msg: 'O anúncio informado não existe'})

      const annoucement = await Annoucements.update({
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

      return res.status(200).json({msg: 'Marca atualizado com sucesso', annoucement})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir anúncio, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const annoucement = await Annoucements.destroy({where: {id}});

      return res.status(200).json({msg: 'Marca deletado com sucesso', annoucement})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir anúncio, tente novamente',
        e
      })
    }
  },
}