/**
 * Sequelize ORM
 */
const dotenv = require("dotenv").config();
import { Sequelize } from "sequelize-typescript";
const Op = Sequelize.Op;
const operatorsAliases = { $gt: Op.gt };

export const sequelize = new Sequelize({
    operatorsAliases: operatorsAliases,
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    modelPaths: [__dirname + "/modules"],
    // defaults
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});