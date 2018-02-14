/**
 * Sequelize ORM
 **/
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
// TODO: Move these to a .json file or use something like dotenv
// TODO: Use Symbols or Typescript Types instead of strings.
// see: http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
var DEV_DB = 'shuttle_code_dev';
var DEV_USR = 'shuttle_code_dev';
var DEV_PW = 'ShuttleC0de!';
var DEV_HOST = 'localhost';
var sequelize = new Sequelize(DEV_DB, DEV_USR, DEV_PW, {
    host: DEV_HOST,
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
    console.log('connection established.');
})["catch"](function (err) {
    console.log('Error - sequelize failed to connect to database.');
});
