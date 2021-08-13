const Color = require('../models/Color');

module.exports = {
  async index(req, res) {
    try {
      const color = await Color.findAndCountAll();

      return res.status(200).json({
        color
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir cor, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const color = await Color.findByPk(id);

      return res.status(200).json(color)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir cor, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { name } = req.body;  

      const [color, created] = await Color.findOrCreate({
        where: { name },
        defaults: {
          name
        }
       });

      return res.status(201).json({
        title: 'Cor cadastrado com sucesso',
        created,
        color
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir cor, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name } = req.body;

      const verifyColor = await Color.findOne({where: {name}});

      if (verifyColor.name === name) return res.status(405).json({msg: `A cor ${name} já está cadastrada`, verifyColor})

      const color = await Color.update({name}, {where: {
        id
      }});

      return res.status(200).json({msg: 'Cor atualizado com sucesso', color})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir cor, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const color = await Color.destroy({where: {id}});

      return res.status(200).json({msg: 'Cor deletado com sucesso', color})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir cor, tente novamente',
        e
      })
    }
  },
}