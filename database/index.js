const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../src/models/User');
const Color = require('../src/models/Color');
const Brands = require('../src/models/Brands');
const Versions = require('../src/models/Versions');
const Models = require('../src/models/Models');

const connection = new Sequelize(dbConfig);

User.init(connection);
Color.init(connection);
Brands.init(connection);
Models.init(connection);
Versions.init(connection);

Brands.associate(connection.models)
Models.associate(connection.models)
Versions.associate(connection.models)

module.exports = connection;