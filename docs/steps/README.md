# STEPS

## Setting Up a Next.js Project with Hero UI (Recommended Method)

* Initialize a Next.js project using the Hero UI template using: `npx heroui-cli@latest init -t app`
* Reference: [Hero UI Documentation](https://www.heroui.com/docs/frameworks/nextjs#heroui-cli-recommended)
* This command will create a new Next.js project with Hero UI pre-configured, streamlining your development process. 🚀

## Add CI workflow for Next.js

* [ci.yml](../../.github/workflows/ci.yml)

## Install Dependencies for HeroUI PRO

* Install dependencies: `npm install --save-dev @iconify/react usehooks-ts recharts`
* Reference: [HeroUI Pro Documentation](https://www.heroui.pro/documentation)

## Setup Postgres Databases

Explore [this](SETUP_POSTGRES.md)

## Configure Prisma

Explore [this](CONFIGURE_PRISMA.md)

## Setup Auth.js

Explore [this](SETUP_AUTHJS.md)

## Configure Vercel

* Settings -> Build & Development Settings -> Project Settings
  * Install Command: `npm install && npx prisma generate`

## Prisma Deploy

* When you are sure about a migration in production:
  * Change `DATABASE_URL` to production from local server.
  * Deploy migrations: `npx prisma migrate deploy`
