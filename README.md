Very simple demo app for employer/employee CRUD.

# Installation
First, install [node.js](https://nodejs.org/en/).

Then, install Postgresql on your machine ([OS X instructions](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb), [Linux instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)).


Then, run `npm install && npm run build_dev_env && npm run build_ts`.

You should now be able to run `npm run test_typescript_setup && npm run test_db_conn`

You should then see a simple "Hello World" message, and a message indicating that a connection to the database has been established. There may be an additional line or two of status info, but there should be no errors. This indicates that Typescript files are correctly compiling and that a connection to the local development database has been established.


# Using the Migration Tool

It is easier to directly use db-migrate from the command line, than wrap its commands in npm scripts. This allows for a much simpler passing of command-line arguments than would be possible with an npm script. The [full documentation is available](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/usage/) on the project site but here are the basic commands:

*To apply all migrations:*
`npm run migrate_up`

*To drop all migrations:*
`npm run migrate_down`

# NOTES
- db-migrate is set to require migration files to be .sql files (which are executed by their corresponding .js migration files). Since the .sql file contains the actual migration queries to be applied, be sure your global .gitignore file is not ignoring .sql files.
