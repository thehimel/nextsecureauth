export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "BrandName",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORTNAME || "BN",
  description: "A secure authentication solution built with Next.js and Auth.js.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/thehimel/nextsecureauth",
    twitter: "https://x.com/home",
    docs: "https://github.com/thehimel/nextsecureauth/tree/main/docs/steps",
    discord: "https://discord.com/",
    sponsor: "/",
    signin: "/api/auth/signin",
    signout: "/api/auth/signout",
  },
};
