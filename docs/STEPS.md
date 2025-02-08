# STEPS

## Setting Up a Next.js Project with Hero UI (Recommended Method)

* Initialize a Next.js project using the Hero UI template using: `npx heroui-cli@latest init -t app`
* Reference: [Hero UI Documentation](https://www.heroui.com/docs/frameworks/nextjs#heroui-cli-recommended)
* This command will create a new Next.js project with Hero UI pre-configured, streamlining your development process. 🚀

## Add CI workflow for Next.js

* [ci.yml](../.github/workflows/ci.yml)

## Install Dependencies for HeroUI PRO

Installation:

```shell
npm install --save-dev @iconify/react
npm install usehooks-ts
npm install recharts
```

Reference: [HeroUI Pro Documentation](https://www.heroui.pro/documentation)

## Configure Postgres Database

### Install Postgres Database Locally with Docker

* Create the docker compose file: [docker-compose-db.yml](../docker-compose-db.yml)
* Set the following environment variables in the file: [.env](../.env)
* Start the server with `docker-compose -f docker-compose-db.yml up -d`
* if the server already exists, connect to the server with DataGrip and create the database.
* Then you can define: `DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@HOST:PORT/POSTGRES_DB"` in the environment file.

### Configure Postgres Database for Production with Neon

* Create an account at https://neon.tech/
* Create a project and create a new database with: `Connect -> Database -> Create new database`.
* Connection string is your `DATABASE_URL`.
* You can then use this database as your production database.

> You can create multiple databases with Neon.
