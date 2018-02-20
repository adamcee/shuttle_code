#!/usr/bin/env node
var dotenv = require("dotenv").config();
var spawnSync = require("child_process").spawnSync;
console.log("Creating Postgres dev user and database ...");
// NOTE: If this script expands, write some helper functions to cut down on
// duplicate code.
var roleQuery = ensureSemicolon("CREATE ROLE " + process.env.DB_USER + " WITH PASSWORD '" + process.env.DB_PASSWORD + "';");
executePsql("create role", ["-c", roleQuery]);
var dbQuery = ensureSemicolon("CREATE DATABASE " + process.env.DB_NAME + ";");
executePsql("create db", ["-c", dbQuery]);
var privQuery = ensureSemicolon("GRANT ALL PRIVILEGES ON DATABASE " + process.env.DB_NAME + " TO " + process.env.DB_USER + ";");
executePsql("grant all privileges", ["-c", privQuery]);
var loginQuery = ensureSemicolon("ALTER ROLE " + process.env.DB_USER + " WITH LOGIN;");
executePsql("add login", ["-c", loginQuery]);
// citext extension adds case-insensitive text field type to database.
var ciQuery = ensureSemicolon("CREATE EXTENSION citext;");
executePsql("install citext extension for database", ["" + process.env.DB_NAME, "-c", ciQuery]);
function executePsql(description, commands) {
    var output = spawnSync("psql", commands);
    printOutput(description, output);
}
function printOutput(cmd, msgs) {
    console.log("Info for " + cmd + ":");
    var stdout = msgs.stdout, stderr = msgs.stderr, status = msgs.status;
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    console.log("exit code: " + status);
}
function ensureSemicolon(sqlStatement) {
    var lastChar = sqlStatement.slice(-1);
    switch (lastChar) {
        case ";":
            return sqlStatement;
        default:
            var withSemi = sqlStatement + ";";
            return withSemi;
    }
}
