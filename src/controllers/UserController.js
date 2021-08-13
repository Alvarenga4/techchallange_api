const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findAndCountAll();

      return res.status(200).json({
        user
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir usuário, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const user = await User.findByPk(id);

      return res.status(200).json(user)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir usuário, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { name, email, password } = req.body;  

      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          email, name, password
        }
       });

      return res.status(201).json({
        title: 'Usuário cadastrado com sucesso',
        created,
        user
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir usuário, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const data = req.body;

      const user = await User.update(data, {where: {
        id
      }});

      return res.status(200).json({msg: 'Usuário atualizado com sucesso', user})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir usuário, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const user = await User.destroy({where: {id}});

      return res.status(200).json({msg: 'Usuário deletado com sucesso', user})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir usuário, tente novamente',
        e
      })
    }
  },
}