# NextSecureAuth

A secure authentication solution built with Next.js and Auth.js, providing seamless user login, registration, and access
control with modern security features.

## Technologies Used

- [Node.js v22.13.1 LTS](https://nodejs.org/)
- [Next.js 15.0.4](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Recharts](https://recharts.org/)

## Getting Started

### Setting Up Environment Variables

* Create a `.env` file by copying [.env.example](.env.example)
* Open `.env` and update the variables as needed.

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Configure Vercel

* Settings -> Build & Development Settings -> Project Settings
  * Install Command: `npm install && npx prisma generate`

## Prisma Deploy

* When you are sure about a migration in production:
  * Change DATABASE_URL to production from a local system.
  * Deploy migrations: `npx prisma migrate deploy`

## Change Default Theme

* You can set the default theme in [constants.ts](components/theme/constants.ts)
