import { clsx, type ClassValue } from "clsx";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

import { HOME_DOMAIN } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Mohamed Yahye El Joud | myeljoud.com",
  description = "Mohamed Yahye, a developer and designer. This is my tiny home on the internet, where I share what I'm learning about shipping great products, becoming a better developer and growing a career in tech.",
  image = "/_static/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@myeljoud",
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    themeColor: "#FFF",
  };
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
