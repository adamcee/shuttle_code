#!/usr/bin/env node
'use strict';
// Command line script to set up Postgres local dev database.
const dotenv = require('dotenv').config();
const { spawnSync } = require('child_process');
console.log('Creating Postgres dev user and database ...');

// NOTE: If this script expands, write some helper functions to cut down on
// duplicate code.
const create_role = spawnSync('psql', ['-c', `CREATE ROLE ${process.env.DB_USER} WITH PASSWORD '${process.env.DB_PASSWORD}';`])
print_output('create role', create_role);
// make_user.stdout.on('data', data => console.log(`stdout: ${data}`));
// make_user.stderr.on('data', data => console.log(`stderr: ${data}`));
// make_user.close.on('close', code => console.log(`make_user exited with code: ${close}`));

const create_db = spawnSync('psql', ['-c', `CREATE DATABASE ${process.env.DB_NAME};`]); 
print_output('create db', create_db);
// make_db.stdout.on('data', data => console.log(`stdout: ${data}`));
// make_db.stderr.on('data', data => console.log(`stderr: ${data}`));
// make_db.close.on('close', code => console.log(`make_db exited with code: ${close}`));

const grant_privileges = spawnSync('psql', ["-c", `GRANT ALL PRIVILEGES ON DATABASE ${process.env.DB_NAME} TO ${process.env.DB_USER};`]); 
print_output('grant all privileges', grant_privileges);
// grant_privileges.stdout.on('data', data => console.log(`stdout: ${data}`));
// grant_privileges.stderr.on('data', data => console.log(`stderr: ${data}`));
// grant_privileges.close.on('close', code => console.log(`grant_privileges exited with code: ${close}`));

const add_login = spawnSync('psql',  ['-c', `ALTER ROLE ${process.env.DB_USER} WITH LOGIN;`]);
print_output('add login', add_login);
// add_login.stdout.on('data', data => console.log(`stdout: ${data}`));
// add_login.stderr.on('data', data => console.log(`stderr: ${data}`));
// add_login.close.on('close', code => console.log(`add_login exited with code: ${close}`));

function print_output(cmd: string, msgs): void {
    console.log(`Info for ${cmd}:`)
    const { stdout, stderr, status } = msgs;
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log(`exit code: ${status}`);
}