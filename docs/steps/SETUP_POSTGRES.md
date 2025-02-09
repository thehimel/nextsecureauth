# Setup Postgres Databases

## Install Postgres Database Locally with Docker

* Create the docker compose file: [docker-compose-db.yml](../../docker-compose-db.yml)
* Set the following environment variables in the file: [.env](../../.env)
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

## Configure Postgres Database for Production with Neon

* Create an account at https://neon.tech/
* Create a project and create a new database with: `Connect -> Database -> Create new database`.
* Connection string is your `DATABASE_URL`.
* You can then use this database as your production database.

> You can create multiple databases with Neon.
