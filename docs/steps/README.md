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

## Configure Prettier Line Length to 120 Characters

* Update [.eslintrc.json](../../.eslintrc.json)

```json
{
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 120
      }
    ]
  }
}
```

## Configure the Sign In and Sign Out Pages

* To set up the sign in and sign out routes, configure the following pages:
  * [signin](../../app/auth/signin)
  * [signout](../../app/auth/signout)
* Define `signIn` and `signOut` pages in [auth.ts](../../auth.ts)
* Add `signin` and `signout` links in [site.ts](../../config/site.ts)
* Add the [auth-button.tsx](../../components/auth/auth-button.tsx) in navbar.

## Create Favicon

* Generate the SVG code for the logo.
* Save it as a .svg file.
* Convert the .svg file to .ico.
* Save it as ![favicon.ico](../../public/favicon.ico)

## Configure Default Theme

* Define `DEFAULT_THEME` in [constants.ts](../../components/theme/constants.ts) and us it in [layout.tsx](../../app/layout.tsx)

# Make Site Name and Short Name Configurable

* Make a dynamic [logo](../../components/icons/logo.tsx)
* Add environment variables in [.env.example](../../.env.example)
* Use the defined environment variables in [site.ts](../../config/site.ts)
