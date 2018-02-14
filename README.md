Very simple demo app for employer/employee CRUD.

# Configuration Notes
    - Sequelize requires `sequelize-cli` for migrations. However, the stable version of `sequelize-cli` does not fully support sequelize v4. According to this, it is still safe to use for most things, including migrations: https://github.com/sequelize/sequelize/issues/8773


# Future Notes
  - If using core-js: Typescript was throwing a variety of errors initially. This was solved by downgrading the following packages to specific versions:
    - `@types/node`to v7.0.7
    - `@types/core-js` to v0.9.35

