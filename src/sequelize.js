/**
 * Sequelize ORM
 **/
const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    operatorsAliases: Op,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

// test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection established.');
    })
    .catch((err: any) => {
        console.log(`Error - Sequelize failed to connect: ${err}`)
    })
