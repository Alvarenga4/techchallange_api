const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({msg: 'API Techchallange Online'});
});

module.exports = routes;
