const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../src/models/User');
const Color = require('../src/models/Color');
const Brands = require('../src/models/Brands');
const Versions = require('../src/models/Versions');

const connection = new Sequelize(dbConfig);

User.init(connection);
Color.init(connection);
Brands.init(connection);
Versions.init(connection);

Versions.associate(connection.models)
Brands.associate(connection.models)

module.exports = connection;