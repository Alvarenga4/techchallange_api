const VehicleOptions = require('../models/VehicleOptions');

module.exports = {
  async index(req, res) {
    try {
      const vehicleOptions = await VehicleOptions.findAndCountAll();

      return res.status(200).json({
        vehicleOptions
      })
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opção do veículo, tente novamente',
        e
      })
    }
  },

  async show(req, res) {
    try {
      const {id} = req.params;
      const vehicleOptions = await VehicleOptions.findByPk(id);

      return res.status(200).json(vehicleOptions)
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opção do veículo, tente novamente',
        e
      })
    }
  },

  async store(req, res) {
    try {
      const { name } = req.body;  

      const [vehicleOptions, created] = await VehicleOptions.findOrCreate({
        where: { name },
        defaults: {
          name
        }
       });

      return res.status(201).json({
        title: 'Cor cadastrado com sucesso',
        created,
        vehicleOptions
      })
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opção do veículo, tente novamente',
        e
      })
    }
  },

  async update(req, res) {
    try {
      const {id} = req.params;
      const { name } = req.body;

      const verifyVehicleOptions = await VehicleOptions.findOne({where: {name}});

      if (verifyVehicleOptions != null && verifyVehicleOptions.name === name) return res.status(405).json({msg: `A opção do veículo ${name} já está cadastrada`, verifyVehicleOptions})

      const vehicleOptions = await VehicleOptions.update({name}, {where: {
        id
      }});

      return res.status(200).json({msg: 'Cor atualizado com sucesso', vehicleOptions})
    } catch (error) {
      console.log(error)
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opção do veículo, tente novamente',
        e
      })
    }
  },

  async delete(req, res) {
    try {
      const {id} = req.params;
      const vehicleOptions = await VehicleOptions.destroy({where: {id}});

      return res.status(200).json({msg: 'Cor deletado com sucesso', vehicleOptions})
    } catch (error) {
      let e = [];
      e.push(error);
      return res.status(500).json({
        title: 'Falha ao inserir opção do veículo, tente novamente',
        e
      })
    }
  },
}