//import dbConnection from '../db-connection'
const dbConnection = require('../db-connection')
//import { Model } from 'sequelize/types';

const User = dbConnection.define('user', {
    user: dbConnection.Sequelize.STRING,
    password: dbConnection.Sequelize.STRING 
})

//export default User;
module.exports = User;
