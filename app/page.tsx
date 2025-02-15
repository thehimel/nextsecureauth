import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons/github";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Integrate&nbsp;</span>
        <span className={title({ color: "violet" })}>authentication&nbsp;</span>
        <br />
        <span className={title()}>effortlessly, regardless of your experience.</span>
        <div className={subtitle({ class: "mt-4" })}>Authentication simplified with Next.js and Auth.js.</div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by cloning the{" "}
            <Code color="primary">
              <Link isExternal href={siteConfig.links.github}>
                <GithubIcon size={12} />
                &nbsp;repository
              </Link>
            </Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
