const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../src/models/User');
const Color = require('../src/models/Color');


const connection = new Sequelize(dbConfig);

User.init(connection);
Color.init(connection);

module.exports = connection;