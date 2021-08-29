const Simulation = require('../models/Simulation');
const scoreApproved = require('../utils/score');

module.exports = {
  async index(req, res) {
    try {
      const simulation = await Simulation.findAndCountAll();

      return res.status(200).json({
        simulation
      })
    } catch (error) {
      
      return res.status(500).json({
        title: 'Falha ao inserir simulação, tente novamente',
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const simulation = await Simulation.findByPk(id);

      return res.status(200).json(simulation)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir simulação, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      let is_approved = false;
      const { annoucement_id } = req.headers;
      const { 
        email,
        name,
        cpf,
        tellphone,
        state,
      } = req.body;

      const score = Math.floor(Math.random() * 1000);

      let condition = scoreApproved(score);

      condition.approved ? is_approved = true : is_approved = false;

      const simulation = await Simulation.create({
        score,
        email,
        name,
        cpf,
        tellphone,
        state,
        core: score.toString(), 
        annoucement_id: parseInt(annoucement_id), 
        is_approved, 
        prohibited: condition.prohibited
       });

      return res.status(201).json({
        title: 'Simulação realizada com sucesso',
        simulation,
        condition
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir simulação, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const data = req.body;

      const simulation = await Simulation.update(data, {where: {
        id
      }});

      return res.status(200).json({msg: 'Simulação atualizado com sucesso', simulation})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir simulação, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const simulation = await Simulation.destroy({where: {id}});

      return res.status(200).json({msg: 'Simulação deletado com sucesso', simulation})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir simulação, tente novamente',
        e
      })
    }
  },
}