const express = require('express');

const UserController = require('./controllers/UserController');
const ColorController = require('./controllers/ColorController');
const BrandController = require('./controllers/BrandController');
const VersionsController = require('./controllers/VersionsController');

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

// Versions Routes
routes.get('/v1/version/:brand_id', VersionsController.index);
routes.get('/v1/version/:id', VersionsController.show);
routes.post('/v1/version/:brand_id', VersionsController.store);
routes.put('/v1/version/:id', VersionsController.update);
routes.delete('/v1/version/:id', VersionsController.delete);

module.exports = routes;
