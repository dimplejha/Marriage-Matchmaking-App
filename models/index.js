const sequelize = require('../config/database');
const User = require('./user');

const initDB = async () => {
  await sequelize.sync({ force: true });
};

module.exports = { User, initDB };
