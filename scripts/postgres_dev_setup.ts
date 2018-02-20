#!/usr/bin/env node
// Command line script to set up Postgres local dev database.
const dotenv = require("dotenv").config();
const { spawnSync } = require("child_process");
console.log("Creating Postgres dev user and database ...");

// NOTE: If this script expands, write some helper functions to cut down on
// duplicate code.
const roleQuery = ensureSemicolon(`CREATE ROLE ${process.env.DB_USER} WITH PASSWORD '${process.env.DB_PASSWORD}';`);
executePsql("create role", ["-c", roleQuery]);

const dbQuery = ensureSemicolon(`CREATE DATABASE ${process.env.DB_NAME};`);
executePsql("create db", ["-c", dbQuery]);

const privQuery = ensureSemicolon(`GRANT ALL PRIVILEGES ON DATABASE ${process.env.DB_NAME} TO ${process.env.DB_USER};`);
executePsql("grant all privileges", ["-c", privQuery]);

const loginQuery = ensureSemicolon(`ALTER ROLE ${process.env.DB_USER} WITH LOGIN;`);
executePsql("add login", ["-c", loginQuery]);

// citext extension adds case-insensitive text field type to database.
const ciQuery = ensureSemicolon("CREATE EXTENSION citext;");
executePsql("install citext extension for database", [`${process.env.DB_NAME}`, "-c", ciQuery]);

function executePsql(description: string, commands: string[]): void {
    const output = spawnSync("psql", commands);
    printOutput(description, output);
}

function printOutput(cmd: string, msgs): void {
    console.log(`Info for ${cmd}:`);
    const { stdout, stderr, status } = msgs;
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log(`exit code: ${status}`);
}

function ensureSemicolon(sqlStatement: string): string {
    const lastChar = sqlStatement.slice(-1);
    switch (lastChar) {
        case ";":
            return sqlStatement;
        default:
            const withSemi: string = sqlStatement + ";";
            return withSemi;
    }
}