import Sequelize from 'sequelize';
import config from './config/db';

const connection = new Sequelize(config.name, config.userName, config.password, config.options );

export default connection;