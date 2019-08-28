import dbConnection from '../db-connection'

const Title = dbConnection.define('title', {
    title: dbConnection.Sequelize.STRING
})

export default Title;
