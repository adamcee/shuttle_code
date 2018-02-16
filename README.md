Very simple demo app for employer/employee CRUD.

# Installation
First, install [node.js](https://nodejs.org/en/).

Then, install Postgresql on your machine ([OS X instructions](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb), [Linux instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)).

Then, run `npm install`.

Then,  run `npm build_dev_env`.

Then, run `npm run build`. 

You should now be able to run `npm run test_typescript_setup && npm run test_db_conn` -  you should then see a simple "Hello World" message, and a message indicating that a connection to the database has been established. There may be an additional line or two of status info, but there should be no errors. This indicates that Typescript files are correctly compiling and that a connection to the local development database has been established.

# Configuration Notes
- Sequelize requires `sequelize-cli` for migrations. However, the stable version of `sequelize-cli` does not fully support sequelize v4. According to this, it is still safe to use for most things, including migrations: https://github.com/sequelize/sequelize/issues/8773


# Future Notes
  - If using core-js: Typescript was throwing a variety of errors initially. This was solved by downgrading the following packages to specific versions:
    - `@types/node`to v7.0.7
    - `@types/core-js` to v0.9.35

