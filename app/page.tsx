import Image from "next/image";

import { REFERENCES } from "@/lib/constants";
import typographyPile from "@/public/_static/illustrations/typography-pile-dark.svg";

import Logo from "./ui/logo";

export default function Home() {
  return (
    <main className="relative flex min-h-screen overflow-hidden tablet:items-center tablet:justify-center">
      <div className="absolute -left-[46rem] hidden w-[60rem] tablet:block laptop:-left-[48rem] laptop:w-[70rem]">
        <Image src={typographyPile} alt="Typography pile" priority />
      </div>

      <div className="max-w-2xl px-4 pt-20 tablet:ms-60 tablet:px-8 tablet:pt-0 laptop:ms-96">
        <Logo />

        <p className="mt-4 font-light">
          I&apos;m Mohamed Yahye, a developer who hearts design based in Nouakchott. I work at{" "}
          <a href="https://next.mr" target="_blank" className="underline hover:no-underline">
            Next Technology
          </a>
          ,{" "}
          <a href="https://sellety.com" target="_blank" className="underline hover:no-underline">
            Sellety
          </a>{" "}
          and freelance whenever possible. This is my tiny home on the internet, where I share what
          I&apos;m learning about shipping great products, becoming a better developer and growing a
          career in tech.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 tablet:gap-8">
          {REFERENCES.map(({ src, alt, title, href }) => {
            return (
              <a key={href} href={href} target="_blank" className="hover:opacity-80">
                <Image alt={alt} title={title} src={src} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 w-[54rem] -translate-x-1/2 tablet:hidden">
        <Image src={typographyPile} alt="Typography pile" priority />
      </div>
    </main>
  );
}
