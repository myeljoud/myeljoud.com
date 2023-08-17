import Image from "next/image";

import { REFERENCES } from "@/lib/constants";

import Logo from "./ui/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="max-w-xl space-y-4">
        <Logo />

        <p className="text-gray-300">
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

        <div className="flex items-center space-x-8">
          {REFERENCES.map(({ src, alt, title, href }) => {
            return (
              <a key={href} href={href} target="_blank" className="hover:opacity-80">
                <Image alt={alt} title={title} src={src} />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
