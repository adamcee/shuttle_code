/**
 * Sequelize ORM
 **/
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// TODO: Move these to a .json file or use something like dotenv
const DEV_DB = 'shuttle_code_dev';
const DEV_USR = 'shuttle_code_dev';
const DEV_PW = 'ShuttleC0de!';
const DEV_HOST = 'localhost';

const sequelize = new Sequelize(DEV_DB, DEV_USR, DEV_PW, {
    host: DEV_HOST,
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
        console.log('connection established.');
    })
    .catch(err => {
        console.log('Error - sequelize failed to connect to database.')
    })
