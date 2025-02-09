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
* In case you need to run any query from the postgres shell inside docker:
  * List the running Docker containers to identify your Postgres container: `docker ps`
  * Access the Postgres Container: `docker exec -it <container_name_or_id> bash`
    * Example: `docker exec -it postgres_server bash`
  * Log into Postgres as the Default User: `psql -U <your_db_user> -d postgres`
  * List Databases: `\list`
  * Create database: `CREATE DATABASE <your_db_name>;`
    * Example: `CREATE DATABASE core;`
  * Drop Database: `DROP DATABASE IF EXISTS <your_db_name>;`
    * Example: `DROP DATABASE IF EXISTS core;`
  * To exit the `psql` shell: `\q`
  * Exit the Docker container: `exit`

### Configure Postgres Database for Production with Neon

* Create an account at https://neon.tech/
* Create a project and create a new database with: `Connect -> Database -> Create new database`.
* Connection string is your `DATABASE_URL`.
* You can then use this database as your production database.

> You can create multiple databases with Neon.

## Configure Prisma

* Install dependencies: `npm install prisma @prisma/client @prisma/extension-accelerate`
* Initialize Prisma ORM: `npx prisma init`
  * This will generate the prisma folder and the [schema.prisma](../prisma/schema.prisma) file.
  * This is the main configuration file for Prisma ORM. By default, the `schema.prisma` file will contain the following:
    * `generator client` and `datasource db`
  * `generator client`: This section tells Prisma to generate the Prisma Client, which is used for interacting with the database.
  * `datasource db`: This defines the connection to your database. The default provider is already set to Postgres.
* Update DATABASE_URL in the [.env](../.env) file.
* Add Account, Session, User, and VerificationRequest models following [this reference](https://authjs.dev/getting-started/adapters/prisma?framework=next-js#schema)
* Generate Prisma Client: `npx prisma generate`
* Apply migrations: `npx prisma migrate dev --name init`
  * As you are applying the migration for the first time, make sure that the DATABASE_URL is set to the development database.
* Implement Prisma client singleton with Accelerate extension: [client.ts](../prisma/client.ts)

### Related Commands

* Create the Prisma Client, allowing you to interact with your database: `npx prisma generate`
* Generate and apply database migrations based on your Prisma schema: `npx prisma migrate dev`
* Convert your database schema into a Prisma schema: `npx prisma db pull`

### References

* https://www.prisma.io/docs/guides/prisma-orm-with-nextjs

## Setup Auth.js

### Install Auth.js

* Install dependencies: `npm install next-auth@beta @auth/prisma-adapter`
* Setup environment by generating `AUTH_SECRET`: `npx auth secret`
  * The library uses this random value to encrypt tokens and email verification hashes.
  * By default, the value is saved to `.env.local`. Move it to your environment file. Then you can delete `.env.local`.
  * You must also define it in the production.
* Create the following files following [this reference](https://authjs.dev/getting-started/installation?framework=next-js):
  * [auth.ts](../auth.ts)
  * [route.ts](../app/api/auth/%5B...nextauth%5D/route.ts)
  * [middleware.ts](../middleware.ts)

#### References

* https://authjs.dev/getting-started/installation?framework=next-js
* https://authjs.dev/getting-started/adapters/prisma?framework=next-js

### Configure Provider

#### Setup Google Provider

* Set environment variables: `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`.
* Add `Google` as a providers in [auth.ts](../auth.ts)

#### Configure Google OAuth

#####  Configure Google App

* Go to https://console.developers.google.com/apis/credentials
* Create a project.

##### OAuth consent screen

* Branding
  * App information
    * App name: `ENTER_ANY_DATA`
    * User support email: `SELECT_EMAIL_FROM_DROPDOWN`
      * The only email you can select here is the email account associated with this GCP account.
      * This will be exposed to the login screen. Therefore, prefer to create a new account for Google OAuth.
    * App domain (localhost is not allowed here)
      * Application home page
        * `https://www.example.com/`
      * Authorized domains
        * `example.com`
    * Developer contact information: `ENTER_ANY_DATA`
* Audience: `External`
  * Test users
    * User information: `ENTER_DATA_TO_BE_USED_AS_TEST_USER`
* Scopes
  * `./auth/userinfo.email`
  * `./auth/userinfo.profile`

##### Credentials

* Click on `+ CREATE CREDENTIALS` and select `OAuth client ID`
* Application type: `Web application`
* Name: `ENTER_ANY_DATA`
* Authorized JavaScript origins:
  * https://example.com
  * http://localhost:3000
  * https://brandname.vercel.app
* Authorized redirect URIs
  * https://example.com/api/auth/callback/google
  * http://localhost:3000/api/auth/callback/google
  * https://brandname.vercel.app/api/auth/callback/google

![google_oauth.png](images/google_oauth.png)

> `Authorized JavaScript origins` is just the domain name; no slash at the end.

> `Authorized redirect URI` is the URI where the redirection should take place after authentication.

> You will get Client ID and Client Secret after creation of the credentials.

#### References

* https://authjs.dev/getting-started/providers/google?framework=next-js
* https://developers.google.com/identity/protocols/oauth2

### Test Signing in with Google OAuth

* https://example.com/api/auth/signin
* http://localhost:3000/api/auth/signin
