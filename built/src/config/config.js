'use strict';
const dotenv = require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        dialect: "postgres"
    },
};
//# sourceMappingURL=config.js.map