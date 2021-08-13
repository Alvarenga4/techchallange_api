const express = require('express');

const UserController = require('./controllers/UserController');

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

module.exports = routes;
