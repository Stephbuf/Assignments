const Sequelize = require('sequelize');

let database_name ='robo_task_manager';
let username ='root';
let password = 'Cubbage2024';
let port = 3307;

module.exports = new Sequelize(database_name, username, password, {dialect: 'mariadb', port: port});