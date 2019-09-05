const dbConnection = require('../db-connection')
const user = require('./User')

const Note = dbConnection.define('note', {
    title: dbConnection.Sequelize.STRING
})

Note.belongsTo(user)

module.exports = Note;
