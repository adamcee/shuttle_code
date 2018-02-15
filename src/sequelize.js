/**
 * Sequelize ORM
 **/
var dotenv = require('dotenv').config();
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    operatorsAliases: Op,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// test connection
sequelize
    .authenticate()
    .then(function () {
    console.log('Database connection established.');
})["catch"](function (err) {
    console.log("Error - Sequelize failed to connect: " + err);
});
