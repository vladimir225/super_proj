//import Sequelize from 'sequelize';
//import config from './config/db';
const config = require('./config/db')
const Sequelize = require('sequelize')

const connection = new Sequelize(config.name, config.userName, config.password, config.options );
// const connection = new Sequelize('mysql://root:New_password1@localhost:3306/new_database'); 
//export default connection;
module.exports = connection