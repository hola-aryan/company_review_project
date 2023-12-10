const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const reviewModels = sequelize.define('companyReviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  compName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pros: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cons: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }, 
});

module.exports = reviewModels;
