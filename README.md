# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

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
