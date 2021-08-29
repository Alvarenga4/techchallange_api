const express = require('express');

const UserController = require('./controllers/UserController');
const ColorController = require('./controllers/ColorController');
const BrandController = require('./controllers/BrandController');
const ModelsController = require('./controllers/ModelsController');
const VersionsController = require('./controllers/VersionsController');
const VehicleOptionsController = require('./controllers/VehicleOptionsController');
const AnnoucementController = require('./controllers/AnnoucementController');
const SimulationController = require('./controllers/SimulationController');
const AnnoucementOptionsController = require('./controllers/AnnoucementOptionsController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({msg: 'API Techchallange Online'});
});

// Users Routes
routes.get('/v1/users', UserController.index);
routes.get('/v1/users/:id', UserController.show);
routes.post('/v1/users', UserController.store);
routes.put('/v1/users/:id', UserController.update);
routes.delete('/v1/users/:id', UserController.delete);

// Colors Routes
routes.get('/v1/color', ColorController.index);
routes.get('/v1/color/:id', ColorController.show);
routes.post('/v1/color', ColorController.store);
routes.put('/v1/color/:id', ColorController.update);
routes.delete('/v1/color/:id', ColorController.delete);

// Brands Routes
routes.get('/v1/brand', BrandController.index);
routes.get('/v1/brand/:id', BrandController.show);
routes.post('/v1/brand', BrandController.store);
routes.put('/v1/brand/:id', BrandController.update);
routes.delete('/v1/brand/:id', BrandController.delete);

// Models Routes
routes.get('/v1/model/:brand_id', ModelsController.index);
routes.get('/v1/model/:id', ModelsController.show);
routes.post('/v1/model/:brand_id', ModelsController.store);
routes.put('/v1/model/:id', ModelsController.update);
routes.delete('/v1/model/:id', ModelsController.delete);

// Versions Routes
routes.get('/v1/version/:model_id', VersionsController.index);
routes.get('/v1/version/:id', VersionsController.show);
routes.post('/v1/version/:model_id', VersionsController.store);
routes.put('/v1/version/:id', VersionsController.update);
routes.delete('/v1/version/:id', VersionsController.delete);

// VehicleOptions Routes
routes.get('/v1/vehicleoptions', VehicleOptionsController.index);
routes.get('/v1/vehicleoptions/:id', VehicleOptionsController.show);
routes.post('/v1/vehicleoptions', VehicleOptionsController.store);
routes.put('/v1/vehicleoptions/:id', VehicleOptionsController.update);
routes.delete('/v1/vehicleoptions/:id', VehicleOptionsController.delete);

// Annoucement Routes
routes.get('/v1/annoucement', AnnoucementController.index);
routes.get('/v1/annoucement/:id', AnnoucementController.show);
routes.post('/v1/annoucement', AnnoucementController.store);
routes.put('/v1/annoucement/:id', AnnoucementController.update);
routes.delete('/v1/annoucement/:id', AnnoucementController.delete);

//Annoucment Options
routes.get('/v1/annoucementoptions', AnnoucementOptionsController.index);
routes.get('/v1/annoucementoptions/:id', AnnoucementOptionsController.show);
routes.post('/v1/annoucementoptions', AnnoucementOptionsController.store);
routes.put('/v1/annoucementoptions/:id', AnnoucementOptionsController.update);
routes.delete('/v1/annoucementoptions/:id', AnnoucementOptionsController.delete);

//Simulation
routes.get('/v1/simulation', SimulationController.index);
routes.get('/v1/simulation/:id', SimulationController.show);
routes.post('/v1/simulation', SimulationController.store);
routes.put('/v1/simulation/:id', SimulationController.update);
routes.delete('/v1/simulation/:id', SimulationController.delete);

module.exports = routes;
