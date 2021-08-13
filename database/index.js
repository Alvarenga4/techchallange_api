const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../src/models/User');
const Color = require('../src/models/Color');
const Brands = require('../src/models/Brands');


const connection = new Sequelize(dbConfig);

User.init(connection);
Color.init(connection);
Brands.init(connection);

module.exports = connection;