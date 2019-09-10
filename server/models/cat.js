const Sequelize = require('sequelize')
const dbConnection = require('../db-connection')

const Cat = dbConnection.define('cat', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
})

module.exports = Note;