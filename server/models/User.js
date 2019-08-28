import dbConnection from '../db-connection'

const User = dbConnection.define('user', {
    user: dbConnection.Sequelize.STRING,
    password: dbConnection.Sequelize.STRING 
})

export default User;
