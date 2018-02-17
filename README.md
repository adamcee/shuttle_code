Very simple demo app for employer/employee CRUD.

# Installation
First, install [node.js](https://nodejs.org/en/).

Then, install Postgresql on your machine ([OS X instructions](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb), [Linux instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)).

Now, set up the migration tool. This project uses [Standalone Migrations](https://github.com/thuss/standalone-migrations), which is a Ruby gem to use Rails Database Migrations in non-Rails/non-Ruby projects. The Rails migration tool is excellent and there currently is not an equivalent in the node.js ecosystem which is a standalone migration tool and not part of a broader ORM (and Rails Active Migrations can give those a run for their money).

Be sure you have [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [RubyGems](https://rubygems.org/pages/download), and [Bundler](http://bundler.io/). FYI Bundler can be installed via `gem install bundler`.

Then, run `bundle install && npm install && npm run build_dev_env && npm run build_ts`.

You should now be able to run `npm run test_typescript_setup && npm run test_db_conn`

You should then see a simple "Hello World" message, and a message indicating that a connection to the database has been established. There may be an additional line or two of status info, but there should be no errors. This indicates that Typescript files are correctly compiling and that a connection to the local development database has been established.


# Using the Migration Tool

It is easier to directly use Standalone Migrations from the command line, than wrap its commands in npm scripts. This allows for a much simpler passing of command-line arguments than would be possible with an npm script. The full documentation is available on the project site but here are the basic commands:

*To apply your newest migration:*
`rake db:migrate`

*To migrate to a specific version (for example to rollback)*
`rake db:migrate VERSION=20081220234130`

*To migrate a specific database (for example your "testing" database)*
`rake db:migrate RAILS_ENV=test`

*To execute a specific up/down of one single migration*
`rake db:migrate:up VERSION=20081220234130`

*To revert your last migration*
`rake db:rollback`

*To revert your last 3 migrations*
`rake db:rollback STEP=3`
