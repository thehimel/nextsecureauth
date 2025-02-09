# Configure Prisma

* Install dependencies: `npm install prisma @prisma/client @prisma/extension-accelerate`
* Initialize Prisma ORM: `npx prisma init`
  * This will generate the prisma folder and the [schema.prisma](../../prisma/schema.prisma) file.
  * This is the main configuration file for Prisma ORM. By default, the `schema.prisma` file will contain the following:
    * `generator client` and `datasource db`
  * `generator client`: This section tells Prisma to generate the Prisma Client, which is used for interacting with the database.
  * `datasource db`: This defines the connection to your database. The default provider is already set to Postgres.
* Update DATABASE_URL in the [.env](../../.env) file.
* Add Account, Session, User, and VerificationRequest models following [this reference](https://authjs.dev/getting-started/adapters/prisma?framework=next-js#schema)
* Generate Prisma Client: `npx prisma generate`
* Apply migrations: `npx prisma migrate dev --name init`
  * As you are applying the migration for the first time, make sure that the DATABASE_URL is set to the development database.
* Implement Prisma client singleton with Accelerate extension: [client.ts](../../prisma/client.ts)

## Related Commands

* Create the Prisma Client, allowing you to interact with your database: `npx prisma generate`
* Generate and apply database migrations based on your Prisma schema: `npx prisma migrate dev`
* Convert your database schema into a Prisma schema: `npx prisma db pull`

## References

* https://www.prisma.io/docs/guides/prisma-orm-with-nextjs
